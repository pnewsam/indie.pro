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
      <WebsiteContent property={property} />
    </div>
  );
}
