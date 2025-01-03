import { cn } from "@/lib/utils";

export const Heading1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-4xl font-medium tracking-tight", className)}>
      {children}
    </h1>
  );
};
