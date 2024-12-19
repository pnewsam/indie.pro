import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "./Container";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function MarketingNavbar() {
  return (
    <div className="flex justify-between items-center border-b border-gray-200">
      <Container className="py-4">
        <nav className="flex items-center justify-between gap-4">
          <Link
            className="text-xl font-bold transition-colors hover:text-gray-600"
            href="/"
          >
            Indie.Pro
          </Link>
          {/* <div className="flex items-center gap-4">
            <Link
              className={cn(
                "text-sm px-4 py-2 transition-colors hover:bg-gray-100 rounded-full"
              )}
              href="/pricing"
            >
              Pricing
            </Link>
          </div> */}
          <div>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "group gap-2"
              )}
              href="/demo"
            >
              View Demo
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
}
