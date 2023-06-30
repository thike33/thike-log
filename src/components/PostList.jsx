import React from "react";
import { Post } from "src/components/Post";

export const PostList = ({ postList }) => {
  return (
    <ul className="grid grid-cols-1 justify-items-center  gap-8 md:grid-cols-2">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};