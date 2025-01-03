"use client";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { PropertyFormProvider } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { updatePropertyBrand } from "@/app/actions/properties";
import { Property } from "@/schemas/properties";

import { PropertyBrandForm } from "./property-visuals-form";

export function PropertyBrandFlow({ property }: { property: Property }) {
  const { execute, isPending } = useAction(updatePropertyBrand, {
    onSuccess: (data) => {
      toast.success(`Property ${property.name} brand details updated`);
    },
  });

  const onSubmit = async (data: Property & { logo: FileList }) => {
    execute({ logo: data.logo[0], id: data.id });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Visuals</h2>
      <PropertyFormProvider property={property}>
        <PropertyBrandForm
          onSubmit={onSubmit}
          isLoading={isPending}
          property_id={property.id ?? ""}
        />
      </PropertyFormProvider>
    </div>
  );
}
