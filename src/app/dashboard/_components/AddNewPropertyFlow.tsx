"use client";

import { Plus } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";

import { createProperty } from "@/app/actions/properties";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  PropertyFormProvider,
  PropertySchema,
} from "../_contexts/PropertyFormProvider";
import { AddNewPropertyForm } from "./AddNewPropertyForm";

export function AddNewPropertyFlow() {
  const [isOpen, setIsOpen] = useState(false);

  const { execute, isPending } = useAction(createProperty, {
    onSuccess: () => {
      setIsOpen(false);
    },
  });

  const handleSubmit = async (data: PropertySchema) => {
    execute({ name: data.name });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4" />
          Add new property
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new property</DialogTitle>
        </DialogHeader>
        <PropertyFormProvider>
          <AddNewPropertyForm onSubmit={handleSubmit} isLoading={isPending} />
        </PropertyFormProvider>
      </DialogContent>
    </Dialog>
  );
}
