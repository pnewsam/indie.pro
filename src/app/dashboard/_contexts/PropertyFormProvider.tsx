"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { Property, propertySchema } from "@/schemas/properties";

export function PropertyFormProvider({
  children,
  property,
}: {
  children: React.ReactNode;
  property?: Property;
}) {
  const form = useForm<Property>({
    defaultValues: { ...property },
    resolver: zodResolver(propertySchema),
    mode: "onChange",
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}

export const usePropertyForm = () => useFormContext<Property>();
