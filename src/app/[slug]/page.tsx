import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { PhotoGridTemplate } from "@/templates/PhotoGridTemplate";

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
