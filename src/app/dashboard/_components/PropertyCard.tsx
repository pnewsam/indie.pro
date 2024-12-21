import Link from "next/link";

import { Property } from "@/schemas/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/dashboard/properties/${property.slug}`}
      className="p-4 border bg-white transition-all hover:border-neutral-300 rounded-md hover:shadow-md cursor-pointer"
    >
      <h4 className="text-lg font-semibold">{property.name}</h4>
      <span className="text-sm text-gray-500">{property.slug}</span>
    </Link>
  );
}
