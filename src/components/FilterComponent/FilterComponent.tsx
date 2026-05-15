"use client";

import cn from "classnames";
import Link from "next/link";
import { Filters } from "./filters/filters";
import { UI } from "@/src/constants/colors";

const FilterComponent = () => {
  return (
    <div className="mb-7 col-span-full lg:col-span-3 lg:m-0">
      <div className="sticky top-25">
        <div
          className={cn(
            UI.BORDER.ACCENT,
            "flex flex-col items-center border-2 rounded-xl overflow-hidden p-4",
          )}
        >
          <h2 className="text-2xl font-bold text-center mb-4">Filters</h2>
          <Link
            href={"/"}
            className={cn(UI.TEXT.ACCENT, "hover:underline mb-4")}
          >
            Clear filters
          </Link>
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
