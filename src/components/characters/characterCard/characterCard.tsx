import cn from "classnames";
import { UI } from "@/src/constants/colors";
import { IChar } from "@/src/types/IChar";
import { getStatusStyle } from "@/src/utils/getStatusStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  character: IChar;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  const { id, name, image, status, location } = character;
  return (
    <Link
      href={`/character/${id}`}
      className={cn(
        UI.BORDER.GRAY,
        UI.BORDER.HOVER,
        `w-auto lg:max-h-95 border-2 sm:hover:scale-105 transition-all cursor-pointer rounded-xl overflow-hidden relative`,
      )}
    >
      <span
        className={cn(
          getStatusStyle(status),
          UI.TEXT.WHITE,
          `z-10 w-auto h-7 rounded-[5px] absolute top-1.5 right-1 flex items-center font-bold px-2 py-1`,
        )}
      >
        {status}
      </span>
      <div className="relative aspect-square w-full">
        <Image
          fill
          loading="lazy"
          src={image}
          alt={name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <article className="p-2.5">
        <h2 className="mb-6 font-bold line-clamp-1">{name}</h2>
        <p>Last location:</p>
        <p>{location.name}</p>
      </article>
    </Link>
  );
};
