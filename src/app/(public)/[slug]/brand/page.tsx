import { notFound } from "next/navigation";

import { getPropertyBySlug } from "@/app/actions/properties";

import { Container } from "../_components/container";
import { CopyableText } from "../_components/copyable-text";
import { Heading1 } from "../_components/heading-1";
import { Heading2 } from "../_components/heading-2";

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
        <div className="py-8">
          <Heading1>Brand</Heading1>
          <p className="text-base text-muted-foreground">
            This page provides information about the brand and its products.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-medium tracking-tight">Messaging</h2>
          <p className="text-base text-muted-foreground mb-4">
            This section provides information about the brand&apos;s messaging.
          </p>

          <p className="font-medium mb-2">Tagline</p>
          <CopyableText className="mb-4" text={property.brand_voice ?? ""} />

          <p className="font-medium mb-2">Description</p>
          <CopyableText
            className="mb-4"
            text={property.long_description ?? ""}
          />
        </div>
        <div className="mb-8">
          <Heading2>Brand Assets</Heading2>
          <p className="text-base text-muted-foreground">
            This section provides information about the brand&apos;s visual
            identity.
          </p>
        </div>
      </Container>
    </div>
  );
}
