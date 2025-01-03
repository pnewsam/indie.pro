"use client";

import { Loader2 } from "lucide-react";

import { usePropertyForm } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { TextareaRHF } from "@/components/TextareaRHF";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

export function PropertyLanguageForm({
  onSubmit,
  isLoading,
  property_id,
}: {
  onSubmit: (data: Property) => void;
  isLoading: boolean;
  property_id: string;
}) {
  const {
    handleSubmit,
    formState: { isValid },
  } = usePropertyForm();

  const onClick = handleSubmit(onSubmit);

  return (
    <form className="flex flex-col gap-4">
      <InputRHF name="id" type="hidden" value={property_id} />
      <FormFieldRHF
        name="tagline"
        label="Tagline"
        descriptionText="1-2 sentences"
      >
        <TextareaRHF rows={1} name="tagline" />
      </FormFieldRHF>
      <FormFieldRHF
        name="boilerplate"
        label="Boilerplate"
        descriptionText="3-5 sentences"
      >
        <TextareaRHF rows={4} name="boilerplate" />
      </FormFieldRHF>
      <Button
        className="self-start"
        type="submit"
        onClick={onClick}
        disabled={isLoading || !isValid}
      >
        {isLoading ? <Loader2 className="w-4 h-4" /> : "Save"}
      </Button>
    </form>
  );
}
