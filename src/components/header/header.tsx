"use client";

import cn from "classnames";
import Link from "next/link";
import Navigation from "../navigation/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import BurgerMenu from "../burgerMenu/burgerMenu";
import { UI } from "@/src/constants/colors";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "h-17 sticky top-0 z-50 items-centerpy-2 box-border",
          UI.BG.HEADER,
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
            <strong className={`${UI.TEXT.ACCENT} p-0, m-0`}>WiKi</strong>
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
      />
    </>
  );
}
