import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-blue-500 py-5">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-5">
        <h1 className="text-2xl font-bold text-white">
          <Link href="/">てぃけログ</Link>
        </h1>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/" className="text-base font-bold text-white">
                トップ
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-bold text-white">
                カテゴリー
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
