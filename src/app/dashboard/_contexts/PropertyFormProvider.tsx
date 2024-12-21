"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import { Property, propertySchema } from "@/schemas/properties";

export function PropertyFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm<Property>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(propertySchema),
    mode: "onChange",
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}

export const usePropertyForm = () => useFormContext<Property>();
