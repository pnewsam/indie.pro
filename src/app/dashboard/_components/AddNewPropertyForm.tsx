import { Loader2, Plus } from "lucide-react";

import { FormFieldRHF } from "@/components/FormFieldRHF";
import { InputRHF } from "@/components/InputRHF";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

import { usePropertyForm } from "../_contexts/PropertyFormProvider";
import { useUserContext } from "../_contexts/UserProvider";

export const AddNewPropertyForm = ({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: Property) => void;
  isLoading: boolean;
}) => {
  const user = useUserContext();
  const {
    formState: { isValid },
    handleSubmit,
  } = usePropertyForm();

  const onClick = handleSubmit(onSubmit);

  return (
    <form>
      <InputRHF name="id" type="hidden" value={user?.id} />
      <div className="flex flex-col gap-4 mb-4">
        <FormFieldRHF label="Name" name="name">
          <InputRHF name="name" placeholder="Name" />
        </FormFieldRHF>
      </div>
      <div className="flex justify-end">
        <Button disabled={!isValid || isLoading} onClick={onClick}>
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add property
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
