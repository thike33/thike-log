import React from "react";
import { PostList } from "src/components/PostList";
import { getPosts } from "src/libs/microcms";

export default async function Home() {
  const postList = await getPosts();

  if (postList.length === 0) {
    return <p className="md:text-xl">記事が見つかりませんでした。</p>;
  }

  return (
    <div className="mx-auto max-w-2xl lg:w-[calc(100%-360px)] lg:max-w-none">
      <PostList postList={postList} />
    </div>
  );
}
