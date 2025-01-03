import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Property } from "@/schemas/properties";

export const WebsiteNavbar = ({ property }: { property: Property }) => {
  return (
    <div className="h-16">
      <div className="fixed h-16 bg-white top-0 left-0 right-0 z-50 flex justify-between items-center border-b">
        <nav className="container max-w-screen-lg px-4 md:px-8 mx-auto flex items-center justify-between gap-2">
          <Link
            className="flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:text-gray-900 font-medium"
            href="/"
          >
            {property.name}
          </Link>

          <Link
            className={cn(buttonVariants({ variant: "outline" }), "")}
            href="/"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </div>
  );
};
