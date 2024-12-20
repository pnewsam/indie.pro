"use client";

import { Loader2, MoveLeft, MoveRight } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { signup } from "@/app/actions/auth";
import { FormField } from "@/components/FormField";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { execute, isExecuting, isPending, result } = useAction(signup, {
    onSuccess: () => {
      console.log("success!");
      router.push("/confirm");
    },
  });

  return (
    <form className="flex flex-col gap-4 w-full">
      <FormField
        label="Email"
        name="email"
        error={result?.validationErrors?.email?._errors?.[0]}
      >
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField
        label="Password"
        name="password"
        error={result?.validationErrors?.password?._errors?.[0]}
      >
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <div>
        <Button
          onClick={() => {
            execute({ email, password });
          }}
          className="w-full group mb-2"
          disabled={isExecuting || isPending}
          type="button"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Sign up
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
        <div className="flex items-center gap-2 my-2">
          <div className="h-px w-full bg-gray-200" />
          <span className="text-gray-500">OR</span>
          <div className="h-px w-full bg-gray-200" />
        </div>
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          href="/login"
        >
          <MoveLeft className="w-4 h-4" />
          Back to login
        </Link>
      </div>
    </form>
  );
}
