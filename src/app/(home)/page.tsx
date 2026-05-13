import { TStatus } from "@/src/types/TStatus";
import { TGender } from "@/src/types/TGender";
import { TSpecies } from "@/src/types/TSpecies";
import { PaginationComponent } from "@/src/components/paginationComponent/paginationComponent";
import { CharacterList } from "@/src/components/characters/characterList/CharacterList";
import { getChars } from "@/src/api/services";
import { SkeletonGrid } from "@/src/components/characters/characterCard/skeletonCard";
import { Suspense } from "react";

async function CharactersContent({
  params,
}: {
  params: {
    name?: string;
    status?: TStatus;
    gender?: TGender;
    species?: TSpecies;
    page?: string;
    type?: string;
  };
}) {
  const { name, status, gender, species, type, page } = params;
  const currentPage = Number(page) || 1;

  let data = null;
  const filters = {
    name,
    status,
    gender,
    species,
    page: currentPage,
    type,
  };

  try {
    data = await getChars(filters);
  } catch (e) {
    console.error("Data fetching error:", e);
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      <h1 className="text-center col-span-full lg:col-span-9 font-bold text-2xl">
        No characters found!
      </h1>
    );
  }

  return (
    <>
      <CharacterList characters={data.results} />
      <PaginationComponent totalPages={data.info.pages} />
    </>
  );
}

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: Promise<{
    name?: string;
    status?: TStatus;
    gender?: TGender;
    species?: TSpecies;
    page?: string;
    type?: string;
  }>;
}) {
  const params = await searchParams;
  const key = JSON.stringify(params);

  return (
    <Suspense key={key} fallback={<SkeletonGrid />}>
      <CharactersContent params={params} />
    </Suspense>
  );
}
