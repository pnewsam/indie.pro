import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function FormField({
  label,
  name,
  children,
  className,
  error,
  descriptionText,
  helpText,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  className?: string;
  error?: string;
  descriptionText?: string;
  helpText?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={name}>{label}</Label>
      {descriptionText && (
        <p className="text-sm text-gray-500">{descriptionText}</p>
      )}
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
    </div>
  );
}
