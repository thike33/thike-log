"use client";

import Link from "next/link";
import React from "react";
import { useToggleMenu } from "src/hooks/useToggleMenu";

export const Header = ({ children }) => {
  const { isOpen, toggle } = useToggleMenu();

  return (
    <header className="fixed inset-x-0 top-0 bg-blue-500 py-4 md:py-2">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-5">
        <h1 className="text-xl font-bold text-white transition-colors hover:text-blue-900 md:text-2xl">
          <Link className="py-4" href="/">
            てぃけログ
          </Link>
        </h1>
        <button
          type="button"
          className={`header-btn ${isOpen ? "is-open" : ""}`}
          onClick={toggle}
        >
          <span className="header-btn-line header-btn__top"></span>
          <span className="header-btn-line header-btn__center"></span>
          <span className="header-btn-line header-btn__bottom"></span>
        </button>
        <nav className={`header-nav ${isOpen ? "is-open" : ""}`}>
          {children}
        </nav>
      </div>
    </header>
  );
};
