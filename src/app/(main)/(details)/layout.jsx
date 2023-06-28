import React from "react";

export default function Layout({ children }) {
  return (
    <div className="m-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow-md lg:w-[calc(100%-360px)] lg:max-w-none">
      {children}
    </div>
  );
}
