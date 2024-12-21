import Link from "next/link";

import { Property } from "@/schemas/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="p-4 border hover:bg-gray-100 rounded-md">
      <h4>
        <Link
          href={`/dashboard/properties/${property.slug}`}
          className="text-lg font-semibold hover:underline"
        >
          {property.name}
        </Link>
      </h4>
      <span className="text-sm text-gray-500">{property.slug}</span>
    </div>
  );
}
