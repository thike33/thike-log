import React from "react";
import { Post } from "src/components/Post";
import { getPosts } from "src/libs/microcms";

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
