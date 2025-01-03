import { z } from "zod";

export const propertySchema = z.object({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),

  // Basic Details
  name: z.string().min(1, { message: "Name is required" }),
  slug: z
    .string()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must be lowercase alphanumeric with hyphens",
    }),
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
  address: z.string().optional().nullable(),

  // Language
  tagline: z
    .string()
    .min(1, { message: "Tagline is required" })
    .max(100, { message: "Tagline must be less than 100 characters" })
    .optional()
    .nullable(),
  boilerplate: z
    .string()
    .min(1, { message: "Boilerplate is required" })
    .max(500, { message: "Boilerplate must be less than 500 characters" })
    .optional()
    .nullable(),

  // Socials
  twitter: z.string().url().optional().nullable(),
  instagram: z.string().url().optional().nullable(),
  facebook: z.string().url().optional().nullable(),
  linkedin: z.string().url().optional().nullable(),
  youtube: z.string().url().optional().nullable(),
  tiktok: z.string().url().optional().nullable(),

  // Logo
  logo_url: z.string().optional().nullable(),
  logo: z.any().optional().nullable().default(null),
});

export type Property = z.infer<typeof propertySchema>;
