"use client";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { updateProperty } from "@/app/actions/properties";
import { PropertyFormProvider } from "@/app/dashboard/_contexts/PropertyFormProvider";
import { Property } from "@/schemas/properties";

import { PropertyContactForm } from "./PropertyContactForm";

export function PropertyContactFlow({ property }: { property: Property }) {
  const { execute, isPending } = useAction(updateProperty, {
    onSuccess: (data) => {
      toast.success(`Property ${property.name} contact details updated`);
    },
  });

  const onSubmit = async (data: Property) => {
    execute({ phone: data.phone, email: data.email, id: data.id });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Contact</h2>
      <PropertyFormProvider property={property}>
        <PropertyContactForm
          onSubmit={onSubmit}
          isLoading={isPending}
          property_id={property.id ?? ""}
        />
      </PropertyFormProvider>
    </div>
  );
}
