"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { uploadFile } from "@/lib/cloudflare/r2";
import { actionClient } from "@/lib/safe-action";
import { createClient } from "@/lib/supabase/server";
import { propertySchema } from "@/schemas/properties";

export const getPropertyBySlug = async (slug: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
};

export const createProperty = actionClient
  .schema(propertySchema)
  .action(async ({ parsedInput: { name, slug } }) => {
    const supabase = await createClient();

    const { data: user, error: userError } = await supabase.auth.getUser();

    if (userError) {
      return { error: userError.message };
    }

    const { data, error } = await supabase.from("properties").insert({
      name,
      slug,
      user_id: user.user.id,
    });

    if (error) {
      return { error: error.message };
    }

    revalidatePath("/dashboard");
    return { data };
  });

export const updateProperty = actionClient
  .schema(propertySchema.partial())
  .action(
    async ({
      parsedInput: {
        id,
        name,
        slug,
        tagline,
        boilerplate,
        phone,
        email,
        twitter,
        instagram,
        facebook,
        linkedin,
        youtube,
        tiktok,
      },
    }) => {
      const supabase = await createClient();

      const { data, error } = await supabase
        .from("properties")
        .update({
          name,
          slug,
          tagline,
          boilerplate,
          phone,
          email,
          twitter,
          instagram,
          facebook,
          linkedin,
          youtube,
          tiktok,
        })
        .eq("id", id);

      console.log({ data, error });

      if (error) {
        return { error: error.message };
      }

      revalidatePath("/dashboard");
      revalidatePath(`/dashboard/properties/${slug}`);
      return { data };
    },
  );

export const deleteProperty = actionClient
  .schema(propertySchema.partial())
  .action(async ({ parsedInput: { id } }) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("properties")
      .delete()
      .eq("id", id);

    console.log({ data, error });

    if (error) {
      return { error: error.message };
    }

    revalidatePath("/dashboard");
    return { data };
  });

export const updatePropertyBrand = actionClient
  .schema(propertySchema.partial().extend({ logo: z.instanceof(File) }))
  .action(async ({ parsedInput: { id, logo, slug } }) => {
    const supabase = await createClient();

    const presignedUrl = await uploadFile(logo);

    const { data, error } = await supabase
      .from("properties")
      .update({
        logo_url: presignedUrl,
      })
      .eq("id", id);

    console.log({ data, error });

    if (error) {
      return { error: error.message };
    }

    revalidatePath("/dashboard");
    revalidatePath(`/dashboard/properties/${slug}`);
    return { data };
  });
