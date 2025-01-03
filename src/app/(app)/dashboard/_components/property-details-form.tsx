"use client";

import { Loader2 } from "lucide-react";

import { usePropertyForm } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

export function PropertyDetailsForm({
  onSubmit,
  isLoading,
  property_id,
}: {
  onSubmit: (data: Property) => void;
  isLoading: boolean;
  property_id: string;
}) {
  const { handleSubmit } = usePropertyForm();

  const onClick = handleSubmit(onSubmit);

  return (
    <form className="flex flex-col gap-4">
      <InputRHF name="id" type="hidden" value={property_id} />
      <FormFieldRHF name="name" label="Name">
        <InputRHF name="name" placeholder="Property Name" />
      </FormFieldRHF>
      <FormFieldRHF name="slug" label="Slug">
        <InputRHF name="slug" placeholder="property-name" />
      </FormFieldRHF>

      <FormFieldRHF name="phone" label="Phone">
        <InputRHF name="phone" placeholder="+123 456 7890" />
      </FormFieldRHF>

      <FormFieldRHF name="address" label="Address">
        <InputRHF name="address" placeholder="123 Main St, Anytown, USA" />
      </FormFieldRHF>

      <FormFieldRHF name="email" label="Email">
        <InputRHF name="email" placeholder="hello@example.com" />
      </FormFieldRHF>

      <Button className="self-start" type="submit" onClick={onClick}>
        {isLoading ? <Loader2 className="w-4 h-4" /> : "Save"}
      </Button>
    </form>
  );
}
