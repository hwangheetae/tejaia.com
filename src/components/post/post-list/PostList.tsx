import path from "path";

import { getPostList } from "@/lib/posts";
import PostCard from "../post-card/PostCard";

const PostList = async () => {
  const postList = await getPostList();
  return (
    <div>
      <h2 className="text-gray-800 text-2xl font-bold m-6">게시글</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {postList.map((post) => {
          const { title, desc, dateString, thumbnail } = post.postDetail;
          const fileName = post.url.split(path.sep).pop()?.replace(/.mdx/, "");
          const url = `/posts/${fileName}`;
          return (
            <PostCard
              key={`${url}+${title}`}
              title={title}
              desc={desc}
              dateString={dateString}
              thumbnail={thumbnail}
              url={url || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
