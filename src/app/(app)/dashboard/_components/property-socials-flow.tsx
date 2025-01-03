"use client";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { updateProperty } from "@/app/actions/properties";
import { Property } from "@/schemas/properties";

import { PropertyFormProvider } from "../_contexts/PropertyFormProvider";
import { PropertySocialsForm } from "./property-socials-form";

export function PropertySocialsFlow({ property }: { property: Property }) {
  const { execute, isPending } = useAction(updateProperty, {
    onSuccess: () => {
      toast.success(`Property ${property.name} updated`);
    },
  });

  const onSubmit = (data: Property) => {
    execute({
      id: data.id,
      twitter: data.twitter,
      instagram: data.instagram,
      facebook: data.facebook,
      linkedin: data.linkedin,
      tiktok: data.tiktok,
      youtube: data.youtube,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Socials</h2>
      <PropertyFormProvider property={property}>
        <PropertySocialsForm onSubmit={onSubmit} isLoading={isPending} />
      </PropertyFormProvider>
    </div>
  );
}
