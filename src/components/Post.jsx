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
        className="block overflow-hidden rounded-lg shadow-md"
      >
        <div className="">
          <Image
            src={post.thumbnail.url}
            width="640"
            height="427"
            className="aspect-video object-cover"
            alt={post.title}
            priority
          />
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
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
