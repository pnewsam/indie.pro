import { MoveRight } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/app/dashboard/_components/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MainContent } from "../../_components/MainContent";

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
        <div className="border border-neutral-300 shadow-md rounded-md w-full h-[720px]">
          <iframe
            className="w-full h-full border-none rounded-md"
            src={`${process.env.BASE_URL}/${slug}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </MainContent>
    </div>
  );
}