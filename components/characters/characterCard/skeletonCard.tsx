import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div
      className=" w-auto
        h-full
        border-2
        border-gray-300
        rounded-xl
        overflow-hidden
        relative"
    >
      <div className="relative aspect-square w-full">
        <Skeleton className="h-60 w-full rounded-none" />
      </div>
      <div className="p-2.5 gap-2 flex flex-col">
        <Skeleton className="h-4 w-20 mb-6" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="
      grid
      grid-cols-1
      col-span-full
      sm:grid-cols-2
      lg:grid-cols-3
      lg:col-span-9
      max-w-full
      lg:px-8
      lg:mx-0
      w-full
      justify-center
      items-center
      mx-auto
      gap-y-7
      gap-x-6
      "
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
