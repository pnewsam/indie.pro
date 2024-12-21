import { MainContent } from "@/app/dashboard/_components/MainContent";
import { PageHeader } from "@/app/dashboard/_components/PageHeader";
import { createClient } from "@/lib/supabase/server";

import { PropertyDetailsFlow } from "../../../_components/PropertyDetailsFlow";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const supabase = await createClient();
  const { data: property, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    throw new Error("Failed to fetch property");
  }

  return (
    <div>
      <PageHeader title="Edit Property" />
      <MainContent>
        <PropertyDetailsFlow property={property} />
      </MainContent>
    </div>
  );
}
