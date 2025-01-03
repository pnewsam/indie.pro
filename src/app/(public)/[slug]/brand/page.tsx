import { DownloadIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { getPropertyBySlug } from "@/app/actions/properties";
import { Button } from "@/components/ui/button";

import { Container } from "../_components/container";

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
    <div>
      <Container>
        <h1 className="text-2xl font-bold tracking-tight py-8">Brand Page</h1>
        <p className="text-lg mb-4">
          This page provides information about the brand and its products.
        </p>
        <div className="flex items-center justify-between gap-2">
          <p className="text-lg font-medium tracking-tight">Logo</p>
          <Button variant="outline">
            Download
            <DownloadIcon className="w-4 h-4" />
          </Button>
        </div>
        <picture className="w-40 h-auto bg-gray-400">
          <img
            src={property.logo_url ?? "/"}
            alt="Logo"
            className="object-cover"
            width={160}
            height={160}
          />
        </picture>
      </Container>
    </div>
  );
}
