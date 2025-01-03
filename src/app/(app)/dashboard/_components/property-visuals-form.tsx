import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { useState } from "react";
import { useWatch } from "react-hook-form";

import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

import { usePropertyForm } from "../_contexts/PropertyFormProvider";

export const PropertyBrandForm = ({
  onSubmit,
  property_id,
  isLoading,
}: {
  onSubmit: (data: Property & { logo: File }) => void;
  property_id: string;
  isLoading: boolean;
}) => {
  const logoUrl = useWatch({ name: "logo_url" });
  const {
    handleSubmit,
    formState: { isValid },
  } = usePropertyForm();

  // @ts-ignore
  const onClick = handleSubmit(onSubmit);

  return (
    <form className="flex flex-col gap-4">
      <InputRHF name="id" type="hidden" value={property_id} />
      {logoUrl && (
        <Image src={logoUrl ?? ""} alt="Logo" width={100} height={100} />
      )}
      <FormFieldRHF name="logo" label="Logo">
        <InputRHF name="logo" type="file" />
      </FormFieldRHF>
      <Button
        className="self-start"
        type="button"
        disabled={!isValid || isLoading}
        onClick={onClick}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </Button>
    </form>
  );
};
