import { WebsiteContent } from "@/app/(public)/[slug]/_components/website-content";
import { WebsiteFooter } from "@/app/(public)/[slug]/_components/website-footer";
import { WebsiteHeader } from "@/app/(public)/[slug]/_components/website-header";
import { Property } from "@/schemas/properties";

import { Container } from "./Container";

export function DemoSection() {
  const property: Property = {
    name: "John Doe",
    slug: "john-doe",
    tagline: "John Doe is a professional photographer.",
    boilerplate: "John Doe is a professional photographer.",
  };
  return (
    <section className="">
      <Container>
        <div className="flex flex-col gap-4 border shadow-xl rounded-lg p-4 max-w-5xl mx-auto">
          <WebsiteHeader property={property} />
          <WebsiteContent property={property} />
          <WebsiteFooter property={property} />
        </div>
      </Container>
    </section>
  );
}
