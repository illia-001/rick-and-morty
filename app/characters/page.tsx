import { TStatus } from "@/types/TStatus";
import { TGender } from "@/types/TGender";
import { TSpecies } from "@/types/TSpecies";
import { PaginationComponent } from "@/components/paginationComponent/paginationComponent";
import { CharacterList } from "@/components/characters/characterList/CharacterList";
import { getChars } from "@/api/services";
import { SkeletonGrid } from "@/components/characters/characterCard/skeletonCard";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

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
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { name, status, gender, species, type, page } = params;
  const currentPage = Number(page) || 1;

  let data = null;
  let error = null;

  try {
    data = await getChars(name, status, gender, species, currentPage, type);
  } catch (e) {
    console.error("Data fetching error:", e);
    error = e;
  }

  if (error) {
    return <div>Сталася помилка при завантаженні даних</div>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <div>No characters found</div>;
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
  searchParams: {
    name?: string;
    status?: TStatus;
    gender?: TGender;
    species?: TSpecies;
    page?: string;
    type?: string;
  };
}) {
  const params = await searchParams;
  const key = JSON.stringify(params);

  return (
    <Suspense key={key} fallback={<SkeletonGrid />}>
      <CharactersContent params={params} />
    </Suspense>
  );
}
