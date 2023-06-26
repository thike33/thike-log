"use client";

import { useSearchParams } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";

export const SearchArea = () => {
  const inputRef = useRef(null);

  const [composing, setComposition] = useState();
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);

  const onEnter = useCallback(
    (e) => {
      if (e.code === "Enter" && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing]
  );

  const handleClick = useCallback(
    (e) => {
      if (e.type === "click" && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing]
  );

  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";

  return (
    <div className="mt-4 flex gap-4">
      <input
        type="search"
        name="q"
        placeholder="キーワード検索"
        ref={inputRef}
        onKeyDown={onEnter}
        className="max-w-xs grow rounded-lg border border-blue-400 p-2 text-sm"
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        defaultValue={defaultQuery}
      />
      <button
        className="rounded-lg border border-blue-400 p-2 text-sm transition-colors hover:bg-blue-500 hover:text-white"
        onClick={handleClick}
      >
        検索
      </button>
    </div>
  );
};
