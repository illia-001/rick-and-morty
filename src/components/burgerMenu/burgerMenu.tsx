"use client";

import { UI } from "@/src/constants/colors";
import style from "./menu.module.scss";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

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

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const BurgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <nav
      ref={menuRef}
      className={cn(style.container, "sm:hidden border-t", {
        [style.open]: isOpen,
        [style.closed]: !isOpen,
      })}
      aria-hidden={!isOpen}
    >
      <ul className="flex w-full justify-center gap-2 sm:gap-8">
        {navigation.map((link) => {
          const isActive =
            pathname.replace(/\/\d+$/, "") === link.link.replace(/\/\d+$/, "");

          return (
            <li key={link.title}>
              <Link
                href={link.link}
                className={cn(
                  UI.TEXT.SECONDARY,
                  UI.TEXT.HOVER.PRIMARY,
                  "h-full text-xl font-semibold items-center flex py-4 px-2",
                  {
                    [`${UI.TEXT.ACCENT}`]: isActive,
                  },
                )}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
