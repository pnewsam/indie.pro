import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function StandardDialog({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
