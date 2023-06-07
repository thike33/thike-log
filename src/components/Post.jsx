import Link from "next/link";
import React from "react";

export const Post = ({ post }) => {
  return (
    <li>
      <Link href={`/`}>
        <h2>{post.title}</h2>
        <p>{post.contents}</p>
      </Link>
    </li>
  );
};
