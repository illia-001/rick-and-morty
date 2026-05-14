"use client";

import cn from "classnames";
import { Accordion } from "@/src/components/ui/accordion";
import { AccordionComponent } from "@/src/components/accordionComponents/accordionComponent";
import { UI } from "@/src/constants/colors";

const filters = [
  [
    {
      title: "Alive",
      type: "Status",
    },
    {
      title: "Dead",
      type: "Status",
    },
    {
      title: "Unknown",
      type: "Status",
    },
  ],
  [
    {
      title: "female",
      type: "Gender",
    },
    {
      title: "male",
      type: "Gender",
    },
    {
      title: "genderless",
      type: "Gender",
    },
    {
      title: "unknown",
      type: "Gender",
    },
  ],
  [
    {
      title: "Human",
      type: "Species",
    },
    {
      title: "Alien",
      type: "Species",
    },
    {
      title: "Humanoid",
      type: "Species",
    },
    {
      title: "Poopybutthole",
      type: "Species",
    },
    {
      title: "Mythological",
      type: "Species",
    },
    {
      title: "Unknown",
      type: "Species",
    },
    {
      title: "Animal",
      type: "Species",
    },
    {
      title: "Disease",
      type: "Species",
    },
    {
      title: "Robot",
      type: "Species",
    },
    {
      title: "Cronenberg",
      type: "Species",
    },
  ],
];

export const Filters = () => {
  return (
    <Accordion
      defaultValue={["Status"]}
      className={cn(UI.BORDER.GRAY, "w-full lg:w-60")}
    >
      {filters.map((filter) => (
        <AccordionComponent key={filter[0].title} items={filter} />
      ))}
    </Accordion>
  );
};
