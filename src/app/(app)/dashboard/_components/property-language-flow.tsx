"use client";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { PropertyFormProvider } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { updateProperty } from "@/app/actions/properties";
import { Property } from "@/schemas/properties";

import { PropertyLanguageForm } from "./property-language-form";

export function PropertyContactFlow({ property }: { property: Property }) {
  const { execute, isPending } = useAction(updateProperty, {
    onSuccess: (data) => {
      toast.success(`Property ${property.name} contact details updated`);
    },
  });

  const onSubmit = async (data: Property) => {
    execute({
      tagline: data.tagline,
      boilerplate: data.boilerplate,
      id: data.id,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Contact</h2>
      <PropertyFormProvider property={property}>
        <PropertyLanguageForm
          onSubmit={onSubmit}
          isLoading={isPending}
          property_id={property.id ?? ""}
        />
      </PropertyFormProvider>
    </div>
  );
}
