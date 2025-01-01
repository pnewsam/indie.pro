"use client";

import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { deleteProperty } from "@/app/actions/properties";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Property } from "@/schemas/properties";

export const PropertyDeleteFlow = ({ property }: { property: Property }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { execute, isPending } = useAction(deleteProperty, {
    onSuccess: () => {
      toast.success(`Successfully deleted property ${property.name}.`);
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(error.error.serverError || "An error occurred");
    },
  });

  const handleDelete = async () => {
    await execute({ id: property.id } as Property);
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Delete Property</h2>
      <p className="text-sm text-muted-foreground">
        This action will permanently delete the property. This action cannot be
        undone.
      </p>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete property {property.name}?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            This action will permanently delete the property and all its data.
            This action cannot be undone.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              type="button"
              variant="destructive"
              disabled={isPending}
              onClick={handleDelete}
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
