import { PhotoGridContent } from "@/app/(public)/[slug]/_templates/PhotoGridContent";
import { PhotoGridHeader } from "@/app/(public)/[slug]/_templates/PhotoGridHeader";
import { Property } from "@/schemas/properties";

export function PhotoGridTemplate({ property }: { property: Property }) {
  return (
    <div className="">
      <PhotoGridHeader property={property} />
      <main className="max-w-screen-lg mx-auto px-4 md:px-8 py-12">
        <PhotoGridContent />
      </main>
    </div>
  );
}
