import Image from "next/image";
import { IChar } from "@/src/types/IChar";
import { getStatusStyle } from "@/src/utils/getStatusStyle";
import { COLORS } from "@/src/constants/colors";
import { Metadata } from "next";
import { getCharById } from "@/src/api/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const p = await params;
  const character = await getCharById(p.id);

  return {
    title: character.name,
    description: `Status: ${character.status} | Species: ${character.species}`,
    openGraph: {
      title: character.name,
      description: `Origin: ${character.origin.name}`,
      images: [
        {
          url: character.image,
          width: 300,
          height: 300,
          alt: character.name,
        },
      ],
    },
  };
}

const CharacterPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const p = await params;

  const response: IChar = await getCharById(p.id);

  const {
    name,
    status,
    gender,
    species,
    image,
    origin: { name: originName },
    location: { name: locationName },
  } = response;

  return (
    <div className="flex flex-col gap-4 w-75 mx-auto col-span-full">
      <h1 className="text-2xl font-bold text-center">{name}</h1>
      <Image priority width={300} height={300} src={image} alt={name} />
      <div
        className={`${getStatusStyle(status)} w-full ${COLORS.TEXT.WHITE} font-bold h-8 rounded-[5px] flex justify-center items-center `}
      >
        {status}
      </div>

      <article className="flex flex-col justify-center">
        <dl className="grid grid-cols-[auto_1fr] gap-x-2">
          <dt className="font-bold">Gender:</dt>
          <dd>{gender}</dd>

          <dt className="font-bold">Location:</dt>
          <dd>{locationName}</dd>

          <dt className="font-bold">Origin:</dt>
          <dd>{originName}</dd>

          <dt className="font-bold">Species:</dt>
          <dd>{species}</dd>
        </dl>
      </article>
    </div>
  );
};

export default CharacterPage;
