"use client";
import cn from "classnames";
import "./nav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const styles = "h-full block text-xl font-semibold text-[#0000008c] hover:text-black items-center flex";
const navigation = [
    {
      link: "/characters",
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

const Navigation = () => {
  const pathname = usePathname();
  
  return (
    <nav className="sm:block hidden">
      <ul className="flex flex-row p-0 m-0 gap-4">
        {navigation.map((link) => {
          const isActive =
            pathname.replace(/\/\d+$/, "") === link.link.replace(/\/\d+$/, "");
          return (
            <li
              key={link.title}
              className={cn("relative h-13", { active: isActive })}
            >
              <Link
                href={link.link}
                className={cn(styles, { "text-blue-500": isActive })}
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

export default Navigation;
