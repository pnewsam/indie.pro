import { Path, useFormContext } from "react-hook-form";

import { FormField } from "@/components/FormField";

export function FormFieldRHF({
  children,
  name,
  label,
  ...rest
}: {
  children: React.ReactNode;
  name: string;
  label: string;
  rest?: any;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      {...register(name)}
      error={errors[name]?.message as string | undefined}
      label={label}
      {...rest}
    >
      {children}
    </FormField>
  );
}
