"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  navigation: { link: string; title: string }[];
  isOpen: boolean;
  styles: string;
}

const BurgerMenu: React.FC<Props> = ({ navigation, isOpen, styles }) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex justify-around bg-[#f8f9fa] border-t mb-4 px-4 py-3 z-1 sm:hidden w-full duration-300 transition-all",
        {
          "translate-y-0 h-15 transition-all duration-300": isOpen,
          "h-0 -translate-y-7 transition-all duration-300": !isOpen,
        },
      )}
    >
      {navigation.map((link) => {
        const isActive =
          pathname.replace(/\/\d+$/, "") === link.link.replace(/\/\d+$/, "");
        return (
          <Link
            key={link.title}
            href={link.link}
            className={cn(styles, { "text-blue-500": isActive })}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default BurgerMenu;
