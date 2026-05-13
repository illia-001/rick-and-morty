import { SearchBar } from "@/src/components/searchBar/searchBar";
import FilterComponent from "@/src/components/FilterComponent/FilterComponent";
import { Metadata } from "next";

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
      <SearchBar />
      <FilterComponent />
      {children}
    </>
  );
}
