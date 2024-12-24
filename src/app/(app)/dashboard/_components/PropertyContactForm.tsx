"use client";

import { Loader2 } from "lucide-react";

import { usePropertyForm } from "@/app/(app)/dashboard/_contexts/PropertyFormProvider";
import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { TextareaRHF } from "@/components/TextareaRHF";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

export function PropertyContactForm({
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
      <FormFieldRHF name="phone" label="Phone">
        <InputRHF name="phone" />
      </FormFieldRHF>
      <FormFieldRHF name="email" label="Email">
        <InputRHF name="email" />
      </FormFieldRHF>
      <Button
        className="w-full"
        type="submit"
        onClick={onClick}
        disabled={isLoading || !isValid}
      >
        {isLoading ? <Loader2 className="w-4 h-4" /> : "Save"}
      </Button>
    </form>
  );
}
