import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Container className="py-4">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-gray-600 group",
          )}
          href="/"
        >
          <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </Container>
      <Container className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)]">
        <div className="flex flex-col items-center justify-center border shadow-xl rounded-lg p-12 max-w-md w-full">
          {children}
        </div>
      </Container>
    </div>
  );
}
