import React from "react";
import { PostList } from "src/components/PostList";
import { getPostsByCategoryId } from "src/libs/microcms";

export default async function CategoryList({ params }) {
  const categoryId = params.id;
  const postList = await getPostsByCategoryId(categoryId);

  if (postList.length === 0) {
    return <p className="md:text-xl">記事が見つかりませんでした。</p>;
  }

  return <PostList postList={postList} />;
}
