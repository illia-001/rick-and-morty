import { getLocationById, getLocations } from "../../../api/services";
import { DropdownMenuCheckboxes } from "@/components/dropdown/DropdownMenuCheckboxes";

export default async function LocationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const p = await params;

  const [locations, location] = await Promise.all([
    getLocations(),
    getLocationById(Number(p.id)),
  ]);

  const { name, type, dimension } = location;

  return (
    <>
      <div className="col-span-full gap-4 px-6">
        <div className="col-span-12 text-center">
          <h1 className="text-3xl font-bold text-center mb-4">
            Location:
            <span className="text-blue-500 ml-2">{name}</span>
          </h1>
          <h2 className="mb-2">Dimention: {dimension}</h2>
          <p className="text-lg mb-4">Type: {type}</p>
        </div>
      </div>

      <DropdownMenuCheckboxes
        name={location.name}
        items={locations}
        title="Location"
      />

      {children}
    </>
  );
}
