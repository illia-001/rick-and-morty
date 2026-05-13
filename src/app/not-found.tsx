"use client";

import cn from "classnames";
import { COLORS } from "../constants/colors";
import styles from "./not-found.module.scss";
import { redirect } from "next/navigation";

export default function NotFoundPage() {
  const handleRedirect = () => {
    redirect("/");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <span className={cn(COLORS.TEXT.PRIMARY)}>44</span>
      </div>
      <p>
        The page you are trying to search has been <br /> moved to another
        universe.
      </p>
      <button
        className={cn(
          `border-2 hover:${COLORS.BORDER.PRIMARY} hover:${COLORS.BG.PRIMARY} hover:${COLORS.TEXT.WHITE} transition-all cursor-pointer`,
          COLORS.BORDER.PRIMARY,
          COLORS.TEXT.PRIMARY,
        )}
        type="button"
        onClick={handleRedirect}
      >
        GET ME HOME
      </button>
    </div>
  );
}
