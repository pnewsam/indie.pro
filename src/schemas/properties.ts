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
  short_description: z
    .string()
    .min(1, { message: "Short description is required" })
    .max(100, { message: "Short description must be less than 100 characters" })
    .optional()
    .nullable(),
  long_description: z
    .string()
    .min(1, { message: "Long description is required" })
    .max(500, { message: "Long description must be less than 500 characters" })
    .optional()
    .nullable(),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .regex(
      /^\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
      {
        message: "Phone number must be in the format +1234567890",
      },
    )
    .optional()
    .nullable(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .optional()
    .nullable(),
  twitter: z.string().url().optional().nullable(),
  instagram: z.string().url().optional().nullable(),
  facebook: z.string().url().optional().nullable(),
  linkedin: z.string().url().optional().nullable(),
  youtube: z.string().url().optional().nullable(),
  tiktok: z.string().url().optional().nullable(),
});

export type Property = z.infer<typeof propertySchema>;
