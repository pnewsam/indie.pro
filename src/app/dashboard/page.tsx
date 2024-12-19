import { Plus } from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

import { PageHeader } from "./_components/PageHeader";

const properties = [
  { id: 1, name: "Property 1" },
  { id: 2, name: "Property 2" },
  { id: 3, name: "Property 3" },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  // const { data: properties, error: propertiesError } = await supabase
  //     .from("properties")
  //     .select("*")
  //   .eq("user_id", data.user.id);

  // if (propertiesError) {
  //   console.error(propertiesError);
  // }

  return (
    <div className="">
      <PageHeader
        title="Dashboard"
        actions={
          <Button>
            <Plus className="w-4 h-4" />
            Add new property
          </Button>
        }
      />
      <div className="grid grid-cols-3 gap-4 p-8">
        {properties.map((property) => (
          <div key={property.id} className="p-4 bg-gray-100 rounded-md">
            {property.name}
          </div>
        ))}
      </div>
    </div>
  );
}
