import Image from "next/image";
import React from "react";
import { getFormatDate } from "src/libs/getFormatDate";
import { getPostDetail } from "src/libs/microcms";

export default async function BlogPost({ params }) {
  const post = await getPostDetail(params.id);
  const formatDate = getFormatDate(post.revisedAt);

  return (
    <div className="m-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow-md lg:w-[calc(100%-360px)] lg:max-w-none">
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <div className="mt-4 flex gap-4">
        <time className="" dateTime={post.revisedAt}>
          {formatDate}
        </time>
        <span className="">{post.category.name}</span>
      </div>
      <div className="mt-10">
        <Image
          src={post.thumbnail.url}
          width="640"
          height="427"
          className="m-auto aspect-video object-cover"
          alt={post.title}
          priority
        />
      </div>
      <div className="mt-10">{post.contents}</div>
    </div>
  );
}
