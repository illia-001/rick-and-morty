import Image from "next/image";
import { getCharById } from "../../api/services";
import { IChar } from "@/src/types/IChar";
import { getStatusStyle } from "@/src/utils/getStatusStyle";
import { COLORS } from "@/src/constatnts/colors";
import { Metadata } from "next";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: number }> 
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

const CharacterPage = async ({ params }: { params: { id: number } }) => {
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
      <Image loading="eager" width={300} height={300} src={image} alt={name} />
      <div
        className={`${getStatusStyle(status)} w-full ${COLORS.TEXT.WHITE} font-bold h-8 rounded-[5px] flex justify-center items-center `}
      >
        {status}
      </div>

      <article className="flex flex-col justify-center">
        <h2>
          <strong>Gender</strong>: {gender}
        </h2>
        <h2>
          <strong>Location</strong>: {locationName}
        </h2>
        <h2>
          <strong>Origin</strong>: {originName}
        </h2>
        <h2>
          <strong>Species</strong>: {species}
        </h2>
      </article>
    </div>
  );
};

export default CharacterPage;
