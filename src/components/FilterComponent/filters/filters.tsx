"use client";
import { Accordion } from "@/src/components/ui/accordion";
import { AccordionComponent } from "@/src/components/accordionComponents/accordionComponent";
import { COLORS } from "@/src/constatnts/colors";

const styles = `
  h-10 w-auto
  ${COLORS.TEXT.PRIMARY}
  ${COLORS.BORDER.PRIMARY}
  hover:${COLORS.BG.PRIMARY}
  hover:${COLORS.TEXT.WHITE}
  transition-all
  border
  rounded-[5px]
  px-2
  py-1
`;

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
    {
      title: "Planet",
      type: "Type",
    },
  ],
];

export const Filters = () => {
  return (
    <Accordion defaultValue={["Status"]} className="w-full lg:w-60">
      {filters.map((filter) => (
        <AccordionComponent
          key={filter[0].title}
          styles={styles}
          items={filter}
        />
      ))}
    </Accordion>
  );
};
