import PostBody from "../post-body/PostBody";
import PostHead from "../post-head/postHead";

import { ParsePostDetailProps } from "@/lib/posts";

interface PostProps {
  post: ParsePostDetailProps;
}

const TotalPost = ({ post }: PostProps) => {
  const { content, ...postDetail } = post;
  return (
    <>
      <PostHead grayMatter={postDetail} />
      <PostBody content={content} />
    </>
  );
};

export default TotalPost;
