import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { AddNewPropertyFlow } from "./_components/AddNewPropertyFlow";
import { MainContent } from "./_components/MainContent";
import { PageHeader } from "./_components/PageHeader";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: properties, error: propertiesError } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", data.user.id);

  if (propertiesError) {
    console.error(propertiesError);
  }

  return (
    <div>
      <PageHeader
        title="Dashboard"
        actions={
          <div className="flex gap-2">
            <AddNewPropertyFlow />
          </div>
        }
      />
      <MainContent>
        <div className="grid grid-cols-3 gap-4">
          {properties &&
            properties.map((property) => (
              <div
                key={property.id}
                className="p-4 border hover:bg-gray-100 rounded-md"
              >
                {property.name}
              </div>
            ))}
        </div>
      </MainContent>
    </div>
  );
}
