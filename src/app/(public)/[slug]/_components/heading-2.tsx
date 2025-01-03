import { cn } from "@/lib/utils";

export const Heading2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-2xl font-medium tracking-tight", className)}>
      {children}
    </h2>
  );
};
