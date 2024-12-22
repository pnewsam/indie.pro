import { cn } from "@/lib/utils";

export function MainContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 p-8 bg-neutral-100 h-[calc(100vh-64px)] overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
