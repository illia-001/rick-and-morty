import { getCharsByIds, getLocationById } from "@/src/api/services";
import { SkeletonGrid } from "@/src/components/characters/characterCard/skeletonCard";
import { CharacterList } from "@/src/components/characters/characterList/CharacterList";
import { Suspense } from "react";

async function LocationContent({ id }: { id: number }) {
  const location = await getLocationById(id);
  const characters = await getCharsByIds(location.residents);

  return <CharacterList characters={characters} />;
}

export default async function Location({
  params,
}: {
  params: { id?: number };
}) {
  const p = await params;
  const key = JSON.stringify(p);
  const id = Number(p.id || 1);

  return (
    <Suspense key={key} fallback={<SkeletonGrid />}>
      <LocationContent id={id} />
    </Suspense>
  );
}
