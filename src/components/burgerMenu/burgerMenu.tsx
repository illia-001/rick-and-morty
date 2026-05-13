"use client";

import { COLORS } from "@/src/constants/colors";
import style from "./menu.module.scss";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface Props {
  navigation: { link: string; title: string }[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  styles: string;
}

const BurgerMenu: React.FC<Props> = ({
  navigation,
  isOpen,
  setIsOpen,
  styles,
}) => {
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
      {navigation.map((link) => {
        const isActive =
          pathname.replace(/\/\d+$/, "") === link.link.replace(/\/\d+$/, "");

        return (
          <Link
            key={link.title}
            href={link.link}
            className={cn(styles, "py-4 px-2", {
              [`${COLORS.TEXT.PRIMARY}`]: isActive,
            })}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default BurgerMenu;
