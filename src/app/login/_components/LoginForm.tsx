"use client";

import { Loader2, MoveRight, UserPlus } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { loginUser, signup } from "@/app/actions/auth";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { execute, isExecuting, isPending, result } = useAction(loginUser, {
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  console.log({ result });

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
              Log in
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
        <div className="flex items-center gap-2 my-2">
          <div className="h-px w-full bg-gray-200" />
          <span className="text-gray-500">OR</span>
          <div className="h-px w-full bg-gray-200" />
        </div>
        <Button
          variant="outline"
          // formAction={signup}
          className="w-full"
          type="button"
          onClick={() => {
            // router.push("/signup");
          }}
        >
          Sign up
          <UserPlus className="w-4 h-4" />
        </Button>
      </div>
      <div>
        {result.serverError && (
          <p className="text-red-500">{result.serverError}</p>
        )}
      </div>
    </form>
  );
}
