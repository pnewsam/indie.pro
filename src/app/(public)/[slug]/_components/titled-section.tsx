import { cn } from "@/lib/utils";

import { Heading2 } from "./heading-2";

export const TitledSection = ({
  id,
  title,
  description,
  className,
  children,
}: {
  id: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={cn(className)}>
      <Heading2 className="mb-2">{title}</Heading2>
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      {children}
    </section>
  );
};
