import { Eye, MoveRight } from "lucide-react";
import Link from "next/link";

import { SEO } from "@/constants/seo";
import { cn } from "@/lib/utils";

import { Container } from "./Container";
import { buttonVariants } from "./ui/button";

export function HeroSection() {
  return (
    <section className="pb-16 pt-24">
      <Container className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl/tight font-bold text-center max-w-screen-md mb-4">
          {SEO.h1}
        </h1>
        <p className="text-lg text-center text-gray-600 mb-4 max-w-screen-md">
          {SEO.longDescription}
        </p>
        <div className="inline-flex items-center gap-4">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group gap-2",
            )}
            href="/demo"
          >
            View Demo
            <Eye className="w-4 h-4" />
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "group gap-2",
            )}
            href="/login"
          >
            Log in
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
