"use client";
import Link from "next/link";
import { Filters } from "./filters/filters";

const FilterComponent = () => {
  return (
    <div className=" mb-7 col-span-full lg:col-span-3">
      <div className="sticky top-25">
        <div className="flex flex-col items-center border-2 rounded-xl border-blue-500 overflow-hidden p-4">
          <h2 className="text-2xl font-bold text-center mb-4">Filters</h2>
          <Link
            href={"/characters/1"}
            className="text-blue-500 hover:underline mb-4"
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
