import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loader() {
  return (
    <div className="col-span-full w-75 gap-4 flex flex-col shrink-0 mx-auto">
      <div className="w-auto h-auto flex justify-center">
        <Skeleton className="h-8 w-40" />
      </div>

      <div className="w-auto h-auto">
        <Skeleton className=" aspect-square" />
      </div>

      <div className="w-auto h-auto">
        <Skeleton className=" h-8" />
      </div>

      <div className="w-full flex flex-col gap-2 h-auto shrink-0">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-20 h-4" />
      </div>
    </div>
  );
}
