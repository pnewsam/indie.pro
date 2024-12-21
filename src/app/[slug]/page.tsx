import { Header } from "@/components/Header";
import { PhotoSection } from "@/components/PhotoSection";
import { createClient } from "@/lib/supabase/server";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const slug = await params;

  const { data: property } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .single();

  return (
    <div className="">
      <Header property={property} />
      <main>
        <div className="max-w-screen-lg mx-auto px-4 py-12">
          <PhotoSection />
        </div>
      </main>
    </div>
  );
}
