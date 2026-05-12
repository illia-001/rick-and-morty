import { SearchBar } from "@/components/searchBar/searchBar";
import FilterComponent from "@/components/FilterComponent/FilterComponent";

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
