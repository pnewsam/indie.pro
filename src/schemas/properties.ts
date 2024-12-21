import { z } from "zod";

export const propertySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  created_at: z.string().datetime().optional(),
});

export type PropertySchema = z.infer<typeof propertySchema>;
