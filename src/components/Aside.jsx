import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getCategories } from "src/libs/microcms";

export const Aside = async () => {
  const categories = await getCategories();
  console.log(categories);

  return (
    <aside className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-8 lg:mt-0 lg:w-80">
      <div className="rounded-lg bg-white p-4 shadow-md">
        <Image
          src="/thike.png"
          className="m-auto"
          width={160}
          height={166}
          alt="てぃけの画像"
          style={{ height: "auto", width: "160px" }}
        />
        <h2 className="mt-4 text-center text-2xl font-bold">てぃけ</h2>
        <p className="mt-4 text-sm">
          北海道在住の３０代で、現在はフリーランスのコーダーとして活動しています。
          <br />
          フロントエンジニアを目指して日々勉強中です。まだまだわからないことだらけなので、学習したことを記録するために始めました。
        </p>
        <div className="mt-4 text-center">
          <Link
            href="https://twitter.com/thike_0627"
            target="_blank"
            className="text-base transition-colors hover:text-blue-500"
          >
            <span>Twitter</span>
          </Link>
        </div>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <Link href={category.id}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
