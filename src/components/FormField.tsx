import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function FormField({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}
