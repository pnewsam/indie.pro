import Link from "next/link";

import { Container } from "@/app/(public)/[slug]/_components/container";
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
              className="text-gray-500 transition-colors hover:text-gray-700"
              href={`/${property.slug}/brand`}
            >
              Brand Assets
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};
