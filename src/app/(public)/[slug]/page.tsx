import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PhotoGridTemplate } from "@/app/(public)/[slug]/_templates/PhotoGridTemplate";
import { getPropertyBySlug } from "@/app/actions/properties";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const property = await getPropertyBySlug(slug);

  return {
    title: property.name ?? "Indie.Pro",
    description: property.description ?? "Indie.Pro",
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const property = await getPropertyBySlug(resolvedParams.slug);

  if (!property) {
    return notFound();
  }

  return <PhotoGridTemplate property={property} />;
}
