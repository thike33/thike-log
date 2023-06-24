import React from "react";
import { Post } from "src/components/Post";
import { getPostsByCategoryId } from "src/libs/microcms";

export default async function CategoryList({ params }) {
  const categoryId = params.id;
  const postList = await getPostsByCategoryId(categoryId);

  return (
    <div className="mx-auto max-w-2xl lg:w-[calc(100%-360px)] lg:max-w-none">
      <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
