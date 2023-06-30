"use client";

import Link from "next/link";
import React from "react";
import { useToggleMenu } from "src/hooks/useToggleMenu";

export const NavLink = ({ category }) => {
  const { close } = useToggleMenu();

  return (
    <Link
      href={`category/${category.id}`}
      onClick={close}
      className="block py-4 text-center text-xl font-bold transition-colors hover:text-blue-900 md:text-white"
    >
      {category.name}
    </Link>
  );
};
