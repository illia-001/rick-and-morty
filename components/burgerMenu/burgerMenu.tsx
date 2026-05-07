"use client";

import './menu.css';
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
        "container sm:hidden border-t",
        {
          "open ": isOpen,
          "closed": !isOpen,
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
