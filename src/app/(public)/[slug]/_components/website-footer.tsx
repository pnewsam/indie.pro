import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Container } from "@/app/(public)/[slug]/_components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Property } from "@/schemas/properties";

export const WebsiteFooter = ({ property }: { property: Property }) => {
  return (
    <footer className="border-t">
      <Container className="py-8">
        <div className="flex justify-between">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Indie.Pro
          </p>
          <span>
            <Link
              className={cn(buttonVariants({ variant: "outline" }))}
              href={`/${property.slug}/brand`}
            >
              Brand
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};
