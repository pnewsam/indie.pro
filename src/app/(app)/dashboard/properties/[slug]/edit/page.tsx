import { MainContent } from "@/app/(app)/dashboard/_components/MainContent";
import { PageHeader } from "@/app/(app)/dashboard/_components/PageHeader";
import { createClient } from "@/lib/supabase/server";

import { PropertyBrandFlow } from "../../../_components/PropertyBrandFlow";
import { PropertyContactFlow } from "../../../_components/PropertyContactFlow";
import { PropertyDeleteFlow } from "../../../_components/PropertyDeleteFlow";
import { PropertyDetailsFlow } from "../../../_components/PropertyDetailsFlow";
import { PropertySocialsFlow } from "../../../_components/PropertySocialsFlow";

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
        <PropertyContactFlow property={property} />
        <PropertySocialsFlow property={property} />
        <PropertyDeleteFlow property={property} />
      </MainContent>
    </div>
  );
}
