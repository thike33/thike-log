import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getFormatDate } from "src/libs/getFormatDate";

export const Post = ({ post }) => {
  const formatDate = getFormatDate(post.revisedAt);

  return (
    <li>
      <Link
        href={`blog/${post.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg shadow-md"
      >
        <div className="overflow-hidden">
          <Image
            src={post.thumbnail.url}
            width="640"
            height="427"
            className="aspect-video object-cover transition-transform group-hover:scale-110"
            alt={post.title}
            priority
          />
        </div>
        <div className="flex grow flex-col bg-white p-4">
          <h2 className="grow text-xl font-bold transition-colors group-hover:text-blue-500">
            {post.title}
          </h2>
          <div className="mt-2 flex items-center gap-4">
            <time className="text-base" dateTime={post.revisedAt}>
              {formatDate}
            </time>
            <span className="text-base">{post.category.name}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};
