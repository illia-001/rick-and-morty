import { SearchBar } from "@/src/components/searchBar/searchBar";
import FilterComponent from "@/src/components/FilterComponent/FilterComponent";
import { Metadata } from "next";
import { Suspense } from "react";
import SearchBarSkeleton from "@/src/components/searchBar/searchBarSkeleton";
import { FilterSkeleton } from "@/src/components/FilterComponent/filterSkeleton";

export const metadata: Metadata = {
  title: {
    template: "%s | Rick & Morty App",
    default: "Characters | Rick & Morty App",
  },
  description: "Search and filter through all characters from the Rick and Morty universe.",
};

export default async function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<SearchBarSkeleton />}><SearchBar /></Suspense>
      <Suspense fallback={<FilterSkeleton />}><FilterComponent /></Suspense>
      {children}
    </>
  );
}
