import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-2xl lg:w-[calc(100%-360px)] lg:max-w-none">
      {children}
    </div>
  );
}
