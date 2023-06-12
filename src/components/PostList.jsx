import React from "react";
import { Post } from "src/components/Post";
import { getPosts } from "src/libs/microcms";

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-2xl lg:w-[calc(100%-360px)] lg:max-w-none">
      <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
