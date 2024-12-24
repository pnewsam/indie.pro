"use client";

import { Loader2 } from "lucide-react";

import { usePropertyForm } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { TextareaRHF } from "@/components/TextareaRHF";
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
      <FormFieldRHF
        name="short_description"
        label="Short Description"
        descriptionText="1-2 sentences"
      >
        <TextareaRHF rows={1} name="short_description" />
      </FormFieldRHF>
      <FormFieldRHF
        name="long_description"
        label="Long Description"
        descriptionText="3-5 sentences"
      >
        <TextareaRHF rows={4} name="long_description" />
      </FormFieldRHF>
      <Button className="w-full" type="submit" onClick={onClick}>
        {isLoading ? <Loader2 className="w-4 h-4" /> : "Save"}
      </Button>
    </form>
  );
}
