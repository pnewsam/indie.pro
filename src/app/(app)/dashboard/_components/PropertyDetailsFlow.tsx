"use client";

import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { PropertyFormProvider } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { updateProperty } from "@/app/actions/properties";
import { Property } from "@/schemas/properties";

import { PropertyDetailsForm } from "./PropertyDetailsForm";

export function PropertyDetailsFlow({ property }: { property: Property }) {
  const router = useRouter();

  const { execute, isPending } = useAction(updateProperty, {
    onSuccess: (data) => {
      toast.success(`Property ${data.input.name} updated`);
      if (data.input.slug !== property.slug) {
        router.push(`/dashboard/properties/${data.input.slug}/edit`);
      }
    },
  });

  const onSubmit = async (data: Property) => {
    execute({
      name: data.name,
      slug: data.slug,
      id: data.id,
      tagline: data.tagline,
      boilerplate: data.boilerplate,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Details</h2>
      <PropertyFormProvider property={property}>
        <PropertyDetailsForm
          onSubmit={onSubmit}
          isLoading={isPending}
          property_id={property.id ?? ""}
        />
      </PropertyFormProvider>
    </div>
  );
}
