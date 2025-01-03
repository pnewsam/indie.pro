import { Loader2 } from "lucide-react";

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
  const {
    handleSubmit,
    formState: { isValid, errors },
  } = usePropertyForm();

  const onClick = handleSubmit(onSubmit);

  return (
    <form className="flex flex-col gap-4">
      <FormFieldRHF
        name="twitter"
        label="Twitter"
        descriptionText="Your Twitter handle"
      >
        <InputRHF name="twitter" placeholder="my_property" />
      </FormFieldRHF>
      <FormFieldRHF name="instagram" label="Instagram">
        <InputRHF name="instagram" placeholder="my_property" />
      </FormFieldRHF>
      <FormFieldRHF name="facebook" label="Facebook">
        <InputRHF
          name="facebook"
          placeholder="https://www.facebook.com/my-property"
        />
      </FormFieldRHF>
      <FormFieldRHF
        name="linkedin"
        label="LinkedIn"
        descriptionText="The URL to your LinkedIn page"
      >
        <InputRHF
          name="linkedin"
          placeholder="https://www.linkedin.com/company/my-property"
        />
      </FormFieldRHF>
      <FormFieldRHF name="tiktok" label="TikTok">
        <InputRHF name="tiktok" placeholder="my_property" />
      </FormFieldRHF>
      <FormFieldRHF name="youtube" label="Youtube">
        <InputRHF
          name="youtube"
          placeholder="https://www.youtube.com/channel/my-property"
        />
      </FormFieldRHF>
      <Button
        className="self-start"
        disabled={isLoading || !isValid}
        onClick={onClick}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}
      </Button>
    </form>
  );
}
