import Link from "next/link";
import React from "react";
import { Nav } from "src/components/Nav";
import { getCategories } from "src/libs/microcms";

export const Header = async () => {
  const categories = await getCategories();

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-blue-500 py-4 md:py-2">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-5">
        <h1 className="text-xl font-bold text-white transition-colors hover:text-blue-900 md:text-2xl">
          <Link className="py-4" href="/">
            てぃけログ
          </Link>
        </h1>
        <Nav categories={categories} />
      </div>
    </header>
  );
};
