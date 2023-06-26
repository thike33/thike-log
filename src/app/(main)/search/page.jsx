import React from "react";
import { Post } from "src/components/Post";
import { getPosts } from "src/libs/microcms";

export default async function searchPage({ searchParams }) {
  const postList = await getPosts({
    q: searchParams.q,
  });

  if (postList.length === 0) {
    return (
      <div className="mx-auto max-w-2xl lg:w-[calc(100%-360px)] lg:max-w-none">
        <p>一致した記事が見つかりませんでした。</p>
      </div>
    );
  }

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
