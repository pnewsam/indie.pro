import { useFormContext } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";

export function TextareaRHF({
  name,
  ...props
}: { name: string } & React.ComponentProps<typeof Textarea>) {
  const { register } = useFormContext();
  return <Textarea {...register(name)} name={name} {...props} />;
}
