import { MainContent } from "@/app/(app)/dashboard/_components/main-content";
import { PageHeader } from "@/app/(app)/dashboard/_components/page-header";
import { createClient } from "@/lib/supabase/server";

import { PropertyDeleteFlow } from "../../../_components/property-delete-flow";
import { PropertyDetailsFlow } from "../../../_components/property-details-flow";
import { PropertySocialsFlow } from "../../../_components/property-socials-flow";
import { PropertyBrandFlow } from "../../../_components/property-visuals-flow";

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
      <PageHeader />
      <MainContent className="flex flex-col gap-8">
        <PropertyDetailsFlow property={property} />
        <PropertyBrandFlow property={property} />
        <PropertySocialsFlow property={property} />
        <PropertyDeleteFlow property={property} />
      </MainContent>
    </div>
  );
}
