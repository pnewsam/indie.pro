import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container max-w-screen-lg px-4 md:px-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};
