import { ExternalLink, MoveRight } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/app/(app)/dashboard/_components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MainContent } from "../../_components/main-content";
import { PropertyIframe } from "../../_components/property-iframe";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <div>
      <PageHeader
        actions={
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "group")}
            href={`/dashboard/properties/${slug}/edit`}
          >
            Edit this property
            <MoveRight className="w-4 h-4 transition-all group-hover:translate-x-1" />
          </Link>
        }
      />
      <MainContent className="flex flex-col gap-4">
        <div className="flex justify-end gap-4">
          <Link
            className={cn(buttonVariants({ variant: "outline" }))}
            href={`${process.env.BASE_URL}/${slug}`}
            target="_blank"
          >
            Open in new tab
            <ExternalLink className="w-4 h-4 transition-all" />
          </Link>
        </div>
        <PropertyIframe slug={slug} />
      </MainContent>
    </div>
  );
}
