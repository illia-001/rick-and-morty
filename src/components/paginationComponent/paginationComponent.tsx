"use client";

import { COLORS } from "@/src/constants/colors";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export function PaginationComponent({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const isVisible = totalPages > 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="col-span-full">
      {isVisible && (
        <Pagination className={`my-8 max-w-full`}>
          <PaginationContent className="max-w-full h-full justify-center gap-x-3">
            <PaginationItem>
              <PaginationPrevious
                size="xl"
                href={currentPage <= 1 ? "#" : createPageURL(currentPage - 1)}
                className={
                  currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {currentPage > 2 && (
              <PaginationItem>
                <PaginationLink size="xl" href={createPageURL(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
            )}

            {currentPage > 3 && <PaginationEllipsis />}

            {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
              .filter((page) => page > 0 && page < totalPages)
              .map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    size="xl"
                    href={createPageURL(page)}
                    isActive={currentPage === page}
                    className={`${currentPage === page ? [`${COLORS.BG.PRIMARY} ${COLORS.TEXT.WHITE}`] : ""}`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

            {currentPage < totalPages - 2 && <PaginationEllipsis />}

            <PaginationItem>
              <PaginationLink
                href={createPageURL(totalPages)}
                className={`${currentPage === totalPages ? [`${COLORS.BG.PRIMARY} ${COLORS.TEXT.WHITE}`] : ""}`}
                size="xl"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                size="xl"
                href={
                  currentPage >= totalPages
                    ? "#"
                    : createPageURL(currentPage + 1)
                }
                className={
                  currentPage >= totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
