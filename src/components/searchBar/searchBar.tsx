"use client";
import { COLORS } from "@/src/constatnts/colors";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedQuery = query.toLowerCase();
    const params = new URLSearchParams(searchParams);

    if (normalizedQuery.trim()) {
      params.set("name", normalizedQuery.trim());
    } else {
      params.delete("name");
    }

    router.push(`/characters/?${params.toString()}`);
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
          className={`${COLORS.BORDER.PRIMARY} ${COLORS.TEXT.PRIMARY} hover:${COLORS.BG.PRIMARY} hover:${COLORS.TEXT.WHITE}  border-2 h-12 w-full rounded-xl sm:w-22 text-[20px] transition-colors cursor-pointer`}
        >
          Search
        </button>
      </form>
    </div>
  );
};
