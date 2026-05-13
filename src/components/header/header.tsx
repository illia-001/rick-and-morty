"use client";

import cn from "classnames";
import Link from "next/link";
import Navigation from "../navigation/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import BurgerMenu from "../burgerMenu/burgerMenu";
import { COLORS } from "@/src/constants/colors";

const styles =
  "h-full block text-xl font-semibold text-[#0000008c] hover:text-black items-center flex";
const navigation = [
  {
    link: "/",
    title: "Characters",
  },
  {
    link: "/episode/1",
    title: "Episodes",
  },
  {
    link: "/location/1",
    title: "Locations",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "h-17 sticky top-0 z-50 items-center py-2 box-border",
          COLORS.BG.HEADER,
          {
            "shadow-lg": !isMenuOpen,
          },
        )}
      >
        <div className="flex justify-between mx-auto items-center px-4 h-full max-w-300">
          <Link
            href={"/"}
            className="text-2xl font-semibold flex gap-2 flex-nowrap"
          >
            Rick & Morty
            <strong className={`${COLORS.TEXT.PRIMARY} p-0, m-0`}>WiKi</strong>
          </Link>
          <div className="sm:hidden cursor-pointer">
            {isMenuOpen ? (
              <IoClose
                size={40}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            ) : (
              <IoMenu
                size={40}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            )}
          </div>
          <Navigation />
        </div>
      </header>
      <BurgerMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        navigation={navigation}
        styles={styles}
      />
    </>
  );
}
