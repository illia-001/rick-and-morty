import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SearchBarSkeleton() {
  return (
    <div className="col-span-full">
      <Skeleton className="mb-4 w-50" />
      <div className="flex flex-col sm:flex-row justify-center gap-4 w-full items-center mb-7 sm:mb-12">
        <Skeleton className={`border-2 rounded-xl h-12 w-full sm:w-107 px-4`} />
        <Skeleton className="border-2 h-12 w-full rounded-xl sm:w-22" />
      </div>
    </div>
  );
}
