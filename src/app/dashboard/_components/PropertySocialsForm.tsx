import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

import { usePropertyForm } from "../_contexts/PropertyFormProvider";

export function PropertySocialsForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: Property) => void;
  isLoading: boolean;
}) {
  const { handleSubmit } = usePropertyForm();

  const onClick = handleSubmit(onSubmit);

  return (
    <form className="flex flex-col gap-4">
      <FormFieldRHF name="twitter" label="Twitter">
        <InputRHF name="twitter" />
      </FormFieldRHF>
      <FormFieldRHF name="instagram" label="Instagram">
        <InputRHF name="instagram" />
      </FormFieldRHF>
      <FormFieldRHF name="facebook" label="Facebook">
        <InputRHF name="facebook" />
      </FormFieldRHF>
      <FormFieldRHF name="linkedin" label="LinkedIn">
        <InputRHF name="linkedin" />
      </FormFieldRHF>
      <Button disabled={isLoading} onClick={onClick}>
        {isLoading ? "Updating..." : "Update"}
      </Button>
    </form>
  );
}
