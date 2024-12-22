"use client";

import { Loader2 } from "lucide-react";

import { usePropertyForm } from "@/app/dashboard/_contexts/PropertyFormProvider";
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
        <InputRHF name="name" />
      </FormFieldRHF>
      <FormFieldRHF name="slug" label="Slug">
        <InputRHF name="slug" />
      </FormFieldRHF>
      <Button className="w-full" type="submit" onClick={onClick}>
        {isLoading ? <Loader2 className="w-4 h-4" /> : "Save"}
      </Button>
    </form>
  );
}
