import { notFound } from "next/navigation";

import { getPropertyBySlug } from "@/app/actions/properties";

import { Container } from "../_components/container";
import { CopyableText } from "../_components/copyable-text";
import { DownloadableImage } from "../_components/downloadable-image";
import { Heading1 } from "../_components/heading-1";
import { TitledSection } from "../_components/titled-section";

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
        <header className="py-8 mb-8 border-b border-border">
          <Heading1 className="mb-2">Brand</Heading1>
          <p className="text-base text-muted-foreground">
            This page provides information about the brand and its products.
          </p>
        </header>
        <TitledSection
          className="mb-10"
          id="language"
          title="Language"
          description="This section provides information about the brand's language."
        >
          <p className="font-medium mb-2">Tagline</p>
          <CopyableText className="mb-4" text={""} />

          <p className="font-medium mb-2">Description</p>
          <CopyableText
            className="mb-4"
            text={property.long_description ?? ""}
          />
        </TitledSection>
        <TitledSection
          id="visuals"
          title="Visuals"
          description="This section provides information about the brand's visual identity."
        >
          <p className="font-medium mb-2">Logo</p>
          <DownloadableImage
            url={property.logo_url ?? ""}
            alt="Brand Logo"
            className="mb-4"
          />
        </TitledSection>
      </Container>
    </div>
  );
}
