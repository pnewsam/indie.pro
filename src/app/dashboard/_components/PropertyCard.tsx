import { Property } from "@/schemas/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="p-4 border hover:bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">{property.name}</h2>
      <span className="text-sm text-gray-500">{property.id}</span>
    </div>
  );
}
