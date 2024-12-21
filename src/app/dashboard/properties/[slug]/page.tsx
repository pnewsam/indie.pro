import { MoveRight } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/app/dashboard/_components/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MainContent } from "../../_components/MainContent";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PageHeader
        title="Property"
        actions={
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "group")}
            href={`/dashboard/properties/${params.slug}/edit`}
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
            src={`${process.env.BASE_URL}/${params.slug}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </MainContent>
    </div>
  );
}
