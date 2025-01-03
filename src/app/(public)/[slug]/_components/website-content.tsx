import { Property } from "@/schemas/properties";

const Photo = () => {
  return (
    <picture className="w-full h-auto border border-neutral-300 aspect-square bg-gray-200">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="object-cover"
        width={300}
        height={300}
      />
    </picture>
  );
};

export const WebsiteContent = ({ property }: { property: Property }) => {
  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Photo key={index} />
        ))}
      </div>
    </main>
  );
};
