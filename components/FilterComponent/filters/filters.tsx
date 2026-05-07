import { Accordion } from "@/components/ui/accordion";
import { AccordionComponent } from "@/components/accordionComponents/accordionComponent";

const styles =
  "h-10 w-auto text-blue-500 transition-all border border-blue-500 rounded-[5px] px-2 py-1 hover:bg-blue-500 hover:text-white";

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
