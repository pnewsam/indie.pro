import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { AddNewPropertyFlow } from "./_components/AddNewPropertyFlow";
import { MainContent } from "./_components/main-content";
import { PageHeader } from "./_components/page-header";
import { PropertyCard } from "./_components/property-card";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: properties, error: propertiesError } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", data.user.id)
    .order("created_at", { ascending: false });

  if (propertiesError) {
    console.error(propertiesError);
  }

  return (
    <div>
      <PageHeader
        actions={
          <div className="flex gap-2">
            <AddNewPropertyFlow />
          </div>
        }
      />
      <MainContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties &&
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </div>
      </MainContent>
    </div>
  );
}
