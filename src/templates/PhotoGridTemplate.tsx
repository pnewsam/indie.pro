import { Property } from "@/schemas/properties";
import { PhotoGridContent } from "@/templates/PhotoGridContent";
import { PhotoGridHeader } from "@/templates/PhotoGridHeader";

export function PhotoGridTemplate({ property }: { property: Property }) {
  return (
    <div className="">
      <PhotoGridHeader property={property} />
      <main className="max-w-screen-lg mx-auto px-4 py-12">
        <PhotoGridContent />
      </main>
    </div>
  );
}
