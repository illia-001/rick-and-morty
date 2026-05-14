"use client";

import cn from "classnames";
import { UI } from "../constants/colors";
import styles from "./not-found.module.scss";
import { redirect } from "next/navigation";

export default function NotFoundPage() {
  const handleRedirect = () => {
    redirect("/");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <span className={cn(UI.TEXT.ACCENT)}>44</span>
      </div>
      <p>
        The page you are trying to search has been <br /> moved to another
        universe.
      </p>
      <button
        type="button"
        onClick={handleRedirect}
      >
        GET ME HOME
      </button>
    </div>
  );
}
