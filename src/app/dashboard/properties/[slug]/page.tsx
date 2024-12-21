import { Pencil } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/app/dashboard/_components/PageHeader";
import { Button, buttonVariants } from "@/components/ui/button";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PageHeader
        title="Property"
        actions={
          <Link
            className={buttonVariants({ variant: "default" })}
            href={`/dashboard/properties/${params.slug}/edit`}
          >
            <Pencil className="w-4 h-4" />
            Edit this property
          </Link>
        }
      />
      <div className="flex flex-col gap-4 p-16 bg-neutral-50 h-full min-h-[calc(100vh-70px)]">
        <div className="border border-neutral-300 shadow-md rounded-md w-full h-[720px]">
          <iframe
            className="w-full h-full border-none rounded-md"
            src={`${process.env.BASE_URL}/${params.slug}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
