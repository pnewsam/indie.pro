import { Metadata } from "next";

import { WebsiteFooter } from "@/app/(public)/[slug]/_components/website-footer";
import { WebsiteNavbar } from "@/app/(public)/[slug]/_components/website-navbar";
import { getPropertyBySlug } from "@/app/actions/properties";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const property = await getPropertyBySlug(slug);

  return {
    title: property.name ?? "Indie.Pro",
    description: property.boilerplate ?? "Indie.Pro",
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
      <WebsiteFooter property={property} />
    </div>
  );
}
