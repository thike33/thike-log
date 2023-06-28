import React from "react";
import { Post } from "src/components/Post";
import { getPosts } from "src/libs/microcms";

export default async function searchPage({ searchParams }) {
  const postList = await getPosts({
    q: searchParams.q,
  });

  if (postList.length === 0) {
    return <p className="md:text-xl">検索に一致した記事が見つかりませんでした。</p>;
  }

  return (
    <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
