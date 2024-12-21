"use client";

import { Loader2 } from "lucide-react";

import { usePropertyDetailsForm } from "@/app/dashboard/_contexts/PropertyDetailsFormProvider";
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
  const { handleSubmit } = usePropertyDetailsForm();

  const onClick = handleSubmit(onSubmit);

  return (
    <form className="flex flex-col gap-4 max-w-xl">
      <InputRHF name="id" type="hidden" value={property_id} />
      <FormFieldRHF name="name" label="Name">
        <InputRHF name="name" />
      </FormFieldRHF>
      <FormFieldRHF name="slug" label="Slug">
        <InputRHF name="slug" />
      </FormFieldRHF>
      <Button type="submit" onClick={onClick}>
        {isLoading ? <Loader2 className="w-4 h-4" /> : "Update"}
      </Button>
    </form>
  );
}
