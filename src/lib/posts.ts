import fs from "fs";
import matter from "gray-matter";
import path from "path";
import dayjs from "dayjs";
import { sync } from "glob";
import { Post } from "../types/types";
const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export interface ParsePostDetailProps {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
  content: string;
}

// 파일 파싱
export const parsePostDetail = async (
  postPath: string
): Promise<ParsePostDetailProps> => {
  const file = fs.readFileSync(postPath, "utf-8");
  const { data: grayMatter, content } = matter(file);

  const title = grayMatter.title || "제목없음";
  const date = new Date(grayMatter.date || "1970-01-01");
  const dateString = dayjs(date).format("YYYY-MM-DD");
  const thumbnail = grayMatter.thumbnail || "/posts/default-thumbnail.jpg";
  const desc = grayMatter.desc || "";

  return {
    title,
    date,
    dateString,
    thumbnail,
    desc,
    content,
  };
};

//slug 추출
export const getPaths = () => {
  const paths: string[] = sync(`${POSTS_PATH}/*.mdx`);
  return paths;
};

export const getPostList = async (): Promise<Post[]> => {
  const paths: string[] = getPaths();
  const posts = await Promise.all(
    paths.map(async (url) => {
      const postDetail = await parsePostDetail(url);
      return { postDetail, url };
    })
  );

  const sortedPostList = posts.sort((a, b) => {
    const dateA = new Date(a.postDetail.date).getTime();
    const dateB = new Date(b.postDetail.date).getTime();
    return dateB - dateA;
  });
  return sortedPostList;
};
