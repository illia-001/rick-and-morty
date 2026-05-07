import { getCharsByIds, getEpisodeById } from "@/api/services";
import { SkeletonGrid } from "@/components/characters/characterCard/skeletonCard";
import { CharacterList } from "@/components/characters/characterList/CharacterList";
import { Suspense } from "react";

async function EpisodeContent({ id }: { id: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const episode = await getEpisodeById(id);
  const characters = await getCharsByIds(episode.characters);

  return <CharacterList characters={characters} />;
}

export default async function Episode({ params }: { params: { id?: number } }) {
  const p = await params;
  const id = Number(p.id || 1);
  const key = JSON.stringify(p);

  return (
    <Suspense key={key} fallback={<SkeletonGrid />}>
      <EpisodeContent id={id} />
    </Suspense>
  );
}
