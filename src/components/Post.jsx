import Link from "next/link";
import React from "react";

export const Post = ({ post }) => {
  return (
    <li>
      <Link href={`blog/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.contents}</p>
        <p>{post.category.name}</p>
      </Link>
    </li>
  );
};
