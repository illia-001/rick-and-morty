import { IChar } from "@/src/types/IChar";
import { CharacterCard } from "../characterCard/characterCard";

interface Props {
  characters: IChar[];
}

export const CharacterList: React.FC<Props> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 col-span-full sm:grid-cols-2 lg:grid-cols-3 lg:col-span-9 max-w-full lg:pl-8 lg:mx-0 w-full justify-center  mx-auto gap-y-7 gap-x-6">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
};
