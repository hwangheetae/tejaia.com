import PostBody from "@/components/post/post-body/page";
import { getPaths, parsePostDetail } from "@/lib/posts";
import path from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const postPath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);
  const post = await parsePostDetail(postPath);
  return <PostBody post={post} />;
}

export const generateStaticParams = async () => {
  const paths = getPaths();
  const slugs = paths
    .map((filePath: string) => {
      const fileName = filePath.split(path.sep).pop();
      return fileName?.replace(/.mdx/, "");
    })
    .map((slug) => ({ slug }));
  return slugs;
};

export const dynamicParams = false;
