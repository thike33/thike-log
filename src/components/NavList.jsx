import React from "react";
import { NavLink } from "src/components/NavLink";
import { getCategories } from "src/libs/microcms";

export const NavList = async () => {
  const categories = await getCategories();

  return (
    <ul className="flex h-full flex-col items-center justify-center md:flex-row md:gap-5">
      {categories.map((category) => (
        <li className="w-full" key={category.id}>
          <NavLink category={category} />
        </li>
      ))}
    </ul>
  );
};
