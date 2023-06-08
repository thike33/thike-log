import React from "react";
import { getPostDetail } from "src/libs/microcms";

export default async function BlogPost({ params }) {
  const post = await getPostDetail(params.slug);

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}
