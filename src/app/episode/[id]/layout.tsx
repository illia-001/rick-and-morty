import { getEpisodeById, getEpisodes } from "../../../api/services";
import { DropdownMenuCheckboxes } from "@/src/components/dropdown/DropdownMenuCheckboxes";
import { COLORS } from "../../../constants/colors";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const p = await params;
  const episode = await getEpisodeById(Number(p.id));

  return {
    title: `Episode: ${episode.name}`,
    description: `Details about ${episode.name}`,
  };
}

export default async function EpisodeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const p = await params;

  const [episodes, episode] = await Promise.all([
    getEpisodes(),
    getEpisodeById(Number(p.id)),
  ]);

  const { name, air_date } = episode;

  return (
    <>
      <div className="col-span-full gap-4 px-6">
        <div className="col-span-12 text-center">
          <h1 className="text-3xl font-bold text-center mb-4">
            Episode name:
            <span className={`${COLORS.TEXT.PRIMARY} ml-2`}>{name}</span>
          </h1>
          <p className="text-lg mb-4">Air date: {air_date}</p>
        </div>
      </div>

      <DropdownMenuCheckboxes
        name={episode.name}
        title="Episode"
        items={episodes}
      />

      {children}
    </>
  );
}
