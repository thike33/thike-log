import React from "react";
import { Post } from "src/components/Post";
import { client } from "src/libs/microcms";

export const PostList = async () => {
  const data = await client.get({ endpoint: "blog" });
  const posts = data.contents;

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
