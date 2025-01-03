import { Metadata } from "next";

import { WebsiteFooter } from "@/app/(public)/[slug]/_templates/website-footer";
import { WebsiteHeader } from "@/app/(public)/[slug]/_templates/website-header";
import { WebsiteNavbar } from "@/app/(public)/[slug]/_templates/website-navbar";
import { getPropertyBySlug } from "@/app/actions/properties";

import { WebsiteContent } from "./_templates/website-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const property = await getPropertyBySlug(slug);

  return {
    title: property.name ?? "Indie.Pro",
    description: property.description ?? "Indie.Pro",
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const property = await getPropertyBySlug(params.slug);
  return (
    <div>
      <WebsiteNavbar property={property} />
      {children}
      <WebsiteFooter />
    </div>
  );
}
