import PostBody from "../post-body/PostBody";
import PostHead from "../post-head/postHead";
import Giscus from "@/components/giscus/Giscus";
import { ParsePostDetailProps } from "@/lib/posts";

interface PostProps {
  post: ParsePostDetailProps;
}

const TotalPost = ({ post }: PostProps) => {
  const { content, ...postDetail } = post;
  return (
    <div>
      <PostHead grayMatter={postDetail} />
      <PostBody content={content} />
      <Giscus />
    </div>
  );
};

export default TotalPost;
