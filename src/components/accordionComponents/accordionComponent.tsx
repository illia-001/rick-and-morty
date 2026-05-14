"use client";

import cn from "classnames";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { UI } from "@/src/constants/colors";

interface Props {
  items: { title: string; type: string }[];
}

export const AccordionComponent: React.FC<Props> = ({ items }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSetGender = (newStatus: string, type: string) => {
    const normalizedStatus = newStatus.toLowerCase();
    const normalizedType = type.toLowerCase();
    const params = new URLSearchParams(searchParams);
    const currentValue = params.get(normalizedType);

    if (normalizedStatus !== currentValue) {
      params.set(normalizedType, normalizedStatus);
    } else {
      params.delete(normalizedType);
    }

    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <AccordionItem value={items[0].type} className={cn(UI.BORDER.GRAY)}>
      <AccordionTrigger className="text-sm">{items[0].type}</AccordionTrigger>
      <AccordionContent>
        <div className="flex gap-2 px-5 flex-wrap">
          {items.map((item) => {
            const isActive =
              searchParams.get(item.type.toLowerCase()) ===
              item.title.toLowerCase();

            return (
              <button
                key={item.title}
                aria-pressed
                className={cn(
                  UI.BORDER.ACCENT,
                  UI.TEXT.ACCENT,
                  UI.BG.HOVER,
                  UI.TEXT.HOVER.WHITE,
                  `h-10 w-fit transition-all border rounded-sm px-2 py-1 cursor-pointer`,
                  {
                    [`${UI.BG.ACCENT} ${UI.TEXT.WHITE}`]: isActive,
                  },
                )}
                onClick={() => handleSetGender(item.title, item.type)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionComponent;
