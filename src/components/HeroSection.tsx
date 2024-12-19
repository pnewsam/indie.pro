import { Container } from "./Container";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-12">
      <Container className="flex flex-col items-center justify-center max-w-4xl">
        <h1 className="text-5xl/tight font-bold text-center mb-4">
          You Need a Website.
          <br />
          It Doesn't Have to Be Complicated.
        </h1>
        <p className="text-lg text-center text-gray-600 mb-4">
          As an independent professional, you need a way to showcase your work,
          get more clients, and grow your business. <b>Indie.Pro</b> is the
          easiest way to get your website up and running.
        </p>
        <div className="inline-flex items-center gap-4">
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
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "group gap-2"
            )}
            href="/login"
          >
            Log in
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
