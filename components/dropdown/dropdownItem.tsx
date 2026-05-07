"use client";

import cn from "classnames";
import React from "react";
import { DropdownMenuCheckboxItem } from "../ui/dropdown-menu";
import { IEpisode } from "@/types/IEpisode";
import { usePathname, useRouter } from "next/navigation";
import { ILocation } from "@/types/ILocation";

const getCleanPath = (pathName: string) => {
  return pathName.split("/").slice(0, -1).join("");
};

interface Props {
  item: IEpisode | ILocation;
  onChange: (name: string) => void;
}

export const DropdownItem: React.FC<Props> = ({ item, onChange }) => {
  const router = useRouter();
  const pathname = usePathname();
  const cleanPathname = getCleanPath(pathname);

  const isChecked =
    Number(pathname.replace(`/${cleanPathname}/`, "")) === item.id;

  const handleChangeEpisode = (item: IEpisode | ILocation) => {
    const { name, id } = item;
    onChange(name);

    router.push(`/${cleanPathname}/${id}`);
  };

  return (
    <DropdownMenuCheckboxItem
      key={item.id}
      checked={isChecked}
      onClick={() => handleChangeEpisode(item)}
      className={cn("h-auto rounded-none text-base px-2 mb-0.5 border-b", {
        "text-blue-500": isChecked,
      })}
    >
      {item.name}
    </DropdownMenuCheckboxItem>
  );
};
