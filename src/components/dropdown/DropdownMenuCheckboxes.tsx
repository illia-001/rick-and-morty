"use client";

import * as React from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { DropdownItem } from "./dropdownItem";
import { IEpisode } from "@/src/types/IEpisode";
import { ILocation } from "@/src/types/ILocation";
import { UI } from "@/src/constants/colors";

interface Props {
  items: IEpisode[] | ILocation[];
  title: string;
  name: string;
}

export const DropdownMenuCheckboxes: React.FC<Props> = ({
  items,
  title,
  name,
}) => {
  const [episodeName, setEpisodeName] = React.useState(name);
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className="lg:col-span-3 col-span-full mb-7">
      <div
        className={`sticky top-25 flex flex-col items-center ${UI.BORDER.ACCENT} border-2 p-4 rounded-xl`}
      >
        <span className="text-2xl mb-4">Pick {title}</span>
        <DropdownMenu>
          <DropdownMenuTrigger
            openOnHover
            render={
              <Button
                variant="outline"
                onClick={() => setIsClicked((prev) => !prev)}
                className="w-full rounded-none h-9 flex font-light justify-between"
              >
                <span className="text-sm font-light w-full md:auto overflow-hidden">
                  {episodeName}
                </span>
                {isClicked ? <IoChevronUp /> : <IoChevronDown />}
              </Button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>{title}s</DropdownMenuLabel>
              {items.map((item) => (
                <DropdownItem
                  key={item.id}
                  item={item}
                  onChange={(name) => setEpisodeName(name)}
                />
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
