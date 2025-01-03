import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";

export function InputRHF({
  name,
  ...rest
}: { name: string } & React.ComponentProps<typeof Input>) {
  const { register } = useFormContext();
  return (
    <Input className="text-base bg-neutral-50" {...register(name)} {...rest} />
  );
}
