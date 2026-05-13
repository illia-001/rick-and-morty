"use client";
import cn from "classnames";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { COLORS } from "@/src/constatnts/colors";

interface Props {
  styles: string;
  items: { title: string; type: string }[];
}

export const AccordionComponent: React.FC<Props> = ({ styles, items }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSetGender = (newStatus: string, type: string) => {
    const normalizedStatus = newStatus.toLowerCase();
    const normalizedType = type.toLowerCase();
    const params = new URLSearchParams(searchParams);
    const currentGender = params.get(normalizedType);

    if (normalizedStatus !== currentGender) {
      params.set(normalizedType, normalizedStatus);
    } else {
      params.delete(normalizedType);
    }

    router.push(`/characters/?${params.toString()}`);
  };

  return (
    <AccordionItem value={items[0].type}>
      <AccordionTrigger className="text-sm">{items[0].type}</AccordionTrigger>
      <AccordionContent>
        <div className="flex gap-2 px-5 box-border flex-wrap">
          {items.map((item) => {
            const isActive =
              searchParams.get(item.type.toLowerCase()) ===
              item.title.toLowerCase();

            return (
              <button
                key={item.title}
                className={cn(styles, {
                  [`${COLORS.BG.PRIMARY} ${COLORS.TEXT.WHITE}`]: isActive,
                })}
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
