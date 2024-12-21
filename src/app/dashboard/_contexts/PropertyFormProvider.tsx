"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export type PropertySchema = z.infer<typeof schema>;

export function PropertyFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm<PropertySchema>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}

export const usePropertyForm = () => useFormContext<PropertySchema>();
