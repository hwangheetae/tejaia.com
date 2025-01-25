import Link from "next/link";
import Image from "next/image";

import path from "path";

import { getPostList } from "@/lib/posts";

const PostList = async () => {
  const postList = await getPostList();
  return (
    <div>
      <h1>게시글</h1>
      {postList.map((post) => {
        const { title, desc, dateString, thumbnail } = post.postDetail;
        const fileName = post.url.split(path.sep).pop();
        const url = fileName?.replace(/.mdx/, "");
        return (
          <div key={`${url + title}`}>
            <Link href={`/posts/${url}`}>
              <Image
                src={thumbnail}
                alt={`${title} thumbnail`}
                width={200}
                height={200}
              />
              <h1>{title}</h1>
            </Link>
            <p>{desc}</p>
            <p>{dateString}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
