import { notFound } from "next/navigation";

import { getPropertyBySlug } from "@/app/actions/properties";

import { WebsiteContent } from "./_components/website-content";
import { WebsiteHeader } from "./_components/website-header";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const property = await getPropertyBySlug(resolvedParams.slug);

  if (!property) {
    return notFound();
  }

  return (
    <div className="">
      <WebsiteHeader property={property} />
      <main className="max-w-screen-lg mx-auto px-4 md:px-8 py-12">
        <WebsiteContent property={property} />
      </main>
    </div>
  );
}
