import { z } from "zod";

export const propertySchema = z.object({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  slug: z
    .string()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must be lowercase alphanumeric with hyphens",
    }),
  twitter: z.string().url().optional().nullable(),
  instagram: z.string().url().optional().nullable(),
  facebook: z.string().url().optional().nullable(),
  linkedin: z.string().url().optional().nullable(),
  youtube: z.string().url().optional().nullable(),
  tiktok: z.string().url().optional().nullable(),
});

export type Property = z.infer<typeof propertySchema>;
