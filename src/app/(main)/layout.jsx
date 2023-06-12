import React from "react";
import { Aside } from "src/components/Aside";

export default function Layout({ children }) {
  return (
    <main>
      <div className="m-auto block w-full max-w-7xl px-5 py-20 lg:flex lg:gap-10">
        {children}
        <Aside />
      </div>
    </main>
  );
}
