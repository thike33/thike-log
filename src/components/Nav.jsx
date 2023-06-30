"use client";

import Link from "next/link";
import React from "react";
import { useToggleMenu } from "src/hooks/useToggleMenu";

export const Nav = ({ categories }) => {
  const { closeMenu, isOpen, toggleMenu } = useToggleMenu();

  return (
    <>
      <button
        type="button"
        className={`header-btn ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="header-btn-line header-btn__top"></span>
        <span className="header-btn-line header-btn__center"></span>
        <span className="header-btn-line header-btn__bottom"></span>
      </button>
      <nav className={`header-nav ${isOpen ? "is-open" : ""}`}>
        <ul className="flex h-full flex-col items-center justify-center md:flex-row md:gap-5">
          {categories.map((category) => (
            <li className="w-full" key={category.id}>
              <Link
                href={`category/${category.id}`}
                onClick={closeMenu}
                className="block py-4 text-center text-xl font-bold transition-colors hover:text-blue-900 md:text-white"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
