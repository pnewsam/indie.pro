import { Check } from "lucide-react";
import { notFound } from "next/navigation";

import { getPropertyBySlug } from "@/app/actions/properties";
import { Badge } from "@/components/ui/badge";

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
          <p className="font-medium mb-1">Tagline</p>
          <p className="text-sm text-muted-foreground mb-2">
            5-word phrase for business cards, website headers, and other
            branding materials.
          </p>
          <CopyableText className="mb-4" text={property.tagline} />

          <div className="mb-4">
            <p className="font-medium mb-2">Social Bio</p>
            <p className="text-sm text-muted-foreground mb-2">
              150-character bio for social media.
            </p>
            <CopyableText className="mb-4" text={""} />
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="border-green-500 text-green-500 font-normal gap-1"
              >
                <p className="text-xs">Twitter Bio</p>
                <Check className="w-4 h-4" />
              </Badge>
              <Badge
                variant="outline"
                className="border-green-500 text-green-500 font-normal gap-1"
              >
                <p className="text-xs">Instagram Bio</p>
                <Check className="w-4 h-4" />
              </Badge>
            </div>
          </div>

          <p className="font-medium mb-2">Description</p>
          <CopyableText className="mb-4" text={property.short_description} />

          <p className="font-medium mb-2">Boilerplate</p>
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
