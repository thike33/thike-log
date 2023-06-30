import React from "react";
import { PostList } from "src/components/PostList";
import { getPosts } from "src/libs/microcms";

export default async function searchPage({ searchParams }) {
  const postList = await getPosts({
    q: searchParams.q,
  });

  if (postList.length === 0) {
    return (
      <p className="md:text-xl">検索に一致した記事が見つかりませんでした。</p>
    );
  }

  return <PostList postList={postList} />;
}
