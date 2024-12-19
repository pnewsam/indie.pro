import { MoveLeft, MoveRight, UserPlus } from "lucide-react";
import Link from "next/link";

import { login, signup } from "@/app/actions/auth";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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
        <form className="flex flex-col gap-4 w-full">
          <FormField label="Email" name="email">
            <Input placeholder="Email" type="email" name="email" />
          </FormField>
          <FormField label="Password" name="password">
            <Input placeholder="Password" type="password" name="password" />
          </FormField>
          <div>
            <Button formAction={login} className="w-full group mb-2">
              Log in
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" formAction={signup} className="w-full">
              Sign up
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
