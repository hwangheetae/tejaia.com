import fs from "fs";
import matter from "gray-matter";
import path from "path";
import dayjs from "dayjs";
const BASE_PATH = "/src/posts";

const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf-8");
  const { data: grayMatter, content } = matter(file);
  const dateString = dayjs(grayMatter.date).format("YYYY-MM-DD");
  return { ...grayMatter, dateString, content };
};

const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  const [category, slug] = filePath.split("/");
  const url = `/posts/${category}/${slug}`;
  return { url, category, slug };
};

export const parsePost = async (postPath: string) => {
  const postAbstract = await parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};
