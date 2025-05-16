import TotalPost from "@/components/post/total-post/TotalPost";
import { getPaths, parsePostDetail } from "@/lib/posts";
import path from "path";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const postPath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);
  const post = await parsePostDetail(postPath);
  return <TotalPost post={post} />;
};

export const generateStaticParams = async () => {
  const paths = getPaths();
  return paths.map((filePath: string) => {
    const fileName = filePath.split(path.sep).pop();
    return { slug: fileName?.replace(/.mdx/, "") };
  });
};

export default Page;

export const dynamicParams = false;
