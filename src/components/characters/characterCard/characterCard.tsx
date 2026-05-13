import { COLORS } from "@/src/constatnts/colors";
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
      className={`
        hover:${COLORS.BORDER.PRIMARY}
        transition-all
        sm:hover:scale-110
        w-auto
        h-full
        border-2
        ${COLORS.BORDER.GRAY}
        rounded-xl
        overflow-hidden
        relative`}
      key={id}
    >
      <article
        className={`
          ${getStatusStyle(status)} 
          z-10 
          w-auto 
          h-7
          rounded-[5px] 
          absolute 
          top-1.5 
          right-1 
          ${COLORS.TEXT.WHITE} 
          flex 
          items-center 
          font-bold 
          px-2 
          py-1
        `}
      >
        {status}
      </article>
      <div className="relative aspect-square w-full">
        <Image
          blurDataURL="true"
          fill
          loading="lazy"
          src={image}
          alt={name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <article className="p-2.5">
        <h2 className="mb-6 font-bold">{name}</h2>
        <p>Last location:</p>
        <p>{location.name}</p>
      </article>
    </Link>
  );
};
