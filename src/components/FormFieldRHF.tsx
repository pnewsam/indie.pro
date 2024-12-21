import { useFormContext } from "react-hook-form";

import { FormField } from "@/components/FormField";

export function FormFieldRHF({
  children,
  name,
  label,
  descriptionText,
  helpText,
  ...rest
}: {
  children: React.ReactNode;
  name: string;
  label: string;
  descriptionText?: string;
  helpText?: string;
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
      descriptionText={descriptionText}
      helpText={helpText}
      {...rest}
    >
      {children}
    </FormField>
  );
}
