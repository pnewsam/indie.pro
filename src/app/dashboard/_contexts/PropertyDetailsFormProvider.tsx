"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { Property, propertySchema } from "@/schemas/properties";

export function PropertyDetailsFormProvider({
  children,
  property,
}: {
  children: React.ReactNode;
  property: Property;
}) {
  const form = useForm<Property>({
    defaultValues: {
      id: property.id,
      name: property.name,
      slug: property.slug,
    },
    resolver: zodResolver(
      propertySchema.pick({ id: true, name: true, slug: true }),
    ),
    mode: "onChange",
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}

export const usePropertyDetailsForm = () => useFormContext<Property>();
