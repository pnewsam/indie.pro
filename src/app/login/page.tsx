import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { LoginForm } from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-4 left-4">
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
      </div>
      <div className="flex flex-col items-center justify-center border shadow-xl rounded-lg p-12">
        <h1 className="text-2xl font-bold mb-2">
          Log in to Indie Pro Websites
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Log in to continue building your website.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
