import { Plus } from "lucide-react";

import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { StandardDialog } from "./StandardDialog";

export function AddNewPropertyFlow() {
  return (
    <StandardDialog
      trigger={
        <Button>
          <Plus className="w-4 h-4" />
          Add new property
        </Button>
      }
    >
      <DialogHeader>
        <DialogTitle>Add new property</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-4">
        <FormField label="Name" name="name">
          <Input placeholder="Name" />
        </FormField>
        <FormField label="Property address" name="address">
          <Input placeholder="Property address" />
        </FormField>
      </div>
      <DialogFooter>
        <Button>
          <Plus className="w-4 h-4" />
          Add property
        </Button>
      </DialogFooter>
    </StandardDialog>
  );
}
