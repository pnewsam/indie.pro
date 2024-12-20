"use server";

import { returnValidationErrors } from "next-safe-action";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { actionClient } from "@/lib/safe-action";
import { createClient } from "@/lib/supabase/server";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const loginUser = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { email, password } }) => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log({ data, error });

    if (error) {
      return returnValidationErrors(schema, {
        email: { _errors: ["Invalid email or password"] },
      });
    }

    revalidatePath("/dashboard");
  });

export const signup = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { email, password } }) => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log({ data, error });

    if (error) {
      return returnValidationErrors(schema, {
        email: { _errors: ["Invalid email or password"] },
      });
    } else {
      revalidatePath("/dashboard");
      return { success: true };
    }
  });

export const logout = actionClient.action(async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
});
