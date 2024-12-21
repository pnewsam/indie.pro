"use client";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { updateProperty } from "@/app/actions/properties";
import { PropertyDetailsFormProvider } from "@/app/dashboard/_contexts/PropertyDetailsFormProvider";
import { Property } from "@/schemas/properties";

import { PropertyDetailsForm } from "./PropertyDetailsForm";

export function PropertyDetailsFlow({ property }: { property: Property }) {
  const { execute, isPending } = useAction(updateProperty, {
    onSuccess: (data) => {
      toast.success(`Property ${data.input.name} updated`);
    },
  });

  const onSubmit = async (data: Property) => {
    execute({ name: data.name, slug: data.slug, id: data.id });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Property Details</h2>
      <PropertyDetailsFormProvider property={property}>
        <PropertyDetailsForm
          onSubmit={onSubmit}
          isLoading={isPending}
          property_id={property.id ?? ""}
        />
      </PropertyDetailsFormProvider>
    </div>
  );
}
