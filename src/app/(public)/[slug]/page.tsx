import { notFound } from "next/navigation";

import { PhotoGridTemplate } from "@/app/(public)/[slug]/_templates/PhotoGridTemplate";
import { createClient } from "@/lib/supabase/server";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const resolvedParams = await params;

  const { data: property, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", resolvedParams.slug)
    .single();

  if (!property) {
    return notFound();
  }

  return <PhotoGridTemplate property={property} />;
}
