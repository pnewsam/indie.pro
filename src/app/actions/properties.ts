"use server";

import { revalidatePath } from "next/cache";

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
        short_description,
        long_description,
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
          short_description,
          long_description,
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
