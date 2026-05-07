import Image from "next/image";
import { getCharById } from "../../api/services";
import { IChar } from "@/types/IChar";
import { getStatusStyle } from "@/utils/getStatusStyle";

const CharacterPage = async ({ params }: { params: { id: number } }) => {
  const p = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
        className={`${getStatusStyle(status)} w-full text-white font-bold h-8 rounded-[5px] flex justify-center items-center `}
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
