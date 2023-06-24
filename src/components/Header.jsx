import Link from "next/link";
import React from "react";
import { getCategories } from "src/libs/microcms";

export const Header = async () => {
  const categories = await getCategories();

  return (
    <header className="bg-blue-500 py-5">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-5">
        <h1 className="text-2xl font-bold text-white">
          <Link href="/">てぃけログ</Link>
        </h1>
        <nav>
          <ul className="flex items-center gap-5">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`category/${category.id}`} className="text-base font-bold text-white">{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
