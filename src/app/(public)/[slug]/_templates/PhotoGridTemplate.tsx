import { PhotoGridContent } from "@/app/(public)/[slug]/_templates/PhotoGridContent";
import { PhotoGridFooter } from "@/app/(public)/[slug]/_templates/PhotoGridFooter";
import { PhotoGridHeader } from "@/app/(public)/[slug]/_templates/PhotoGridHeader";
import { PhotoGridNavbar } from "@/app/(public)/[slug]/_templates/PhotoGridNavbar";
import { Property } from "@/schemas/properties";

export function PhotoGridTemplate({ property }: { property: Property }) {
  return (
    <div className="">
      <PhotoGridNavbar property={property} />
      <PhotoGridHeader property={property} />
      <main className="max-w-screen-lg mx-auto px-4 md:px-8 py-12">
        <PhotoGridContent property={property} />
      </main>
      <PhotoGridFooter />
    </div>
  );
}
