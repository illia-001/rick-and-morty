"use client";

import cn from "classnames";
import { COLORS } from "@/src/constants/colors";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const params = useSearchParams();

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedQuery = query.toLowerCase();
    const newParams = new URLSearchParams(params);

    if (normalizedQuery.trim()) {
      newParams.delete("page");
      newParams.set("name", normalizedQuery.trim());
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="col-span-full">
      <h1 className="text-3xl font-bold text-center mb-4">Characters</h1>
      <form
        className="flex flex-col sm:flex-row justify-center gap-4 w-full items-center mb-7 sm:mb-12"
        onSubmit={handleSubmit}
      >
        <input
          defaultValue={query}
          type="text"
          name="name"
          className={`border-2 ${COLORS.BORDER.PRIMARY} rounded-xl h-12 w-full sm:w-107 px-4`}
          placeholder="Search for characters"
          onChange={(event) => handleSetQuery(event.target.value)}
        />
        <button
          type="submit"
          className={cn(
            COLORS.BORDER.PRIMARY,
            COLORS.TEXT.PRIMARY,
            `border-2 h-12 w-full rounded-xl sm:w-22 text-[20px] hover:${COLORS.BORDER.PRIMARY} hover:${COLORS.BG.PRIMARY} hover:${COLORS.TEXT.WHITE} transition-all cursor-pointer`,
          )}
        >
          Search
        </button>
      </form>
    </div>
  );
};
