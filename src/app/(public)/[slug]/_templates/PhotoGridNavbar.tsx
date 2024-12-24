import Link from "next/link";

import { Property } from "@/schemas/properties";

export const PhotoGridNavbar = ({ property }: { property: Property }) => {
  return (
    <div className="flex justify-between items-center border-b">
      <nav className="container max-w-screen-lg px-4 md:px-8 mx-auto flex items-center justify-between gap-2 py-4">
        <Link
          className="flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:text-gray-900"
          href="/"
        >
          <p className="text-base">{property.name}</p>
        </Link>

        <Link
          className="flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:text-gray-900"
          href="/"
        >
          <p className="text-base">Contact us</p>
        </Link>
      </nav>
    </div>
  );
};
