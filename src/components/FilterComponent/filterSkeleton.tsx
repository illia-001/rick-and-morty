import { Skeleton } from "../ui/skeleton";

export const FilterSkeleton = () => {
  return (
    <div className="mb-7 col-span-full lg:col-span-3">
      <div className="sticky top-25">
        <div
          className={`flex flex-col items-center border-2 rounded-xl overflow-hidden p-4`}
        >
          <Skeleton className="text-2xl w-20 font-bold text-center mb-4 h-8" />
          <Skeleton className="mb-4 h-5 w-20" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
};
