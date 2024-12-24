import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { Property } from "@/schemas/properties";

export const PhotoGridHeader = ({ property }: { property: Property }) => {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start md:gap-8 py-8 md:py-12">
          <figure className="border-2 border-neutral-300 min-w-52 w-1/2 md:w-full h-auto aspect-square mx-auto md:mx-0 bg-gray-200">
            <picture>
              <img src="/images/profile.jpg" alt="Profile" />
            </picture>
          </figure>
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl text-center font-bold">{property?.name}</h1>
            <div className="flex flex-wrap items-center gap-4">
              {property.phone && (
                <a
                  href={`tel:${property.phone}`}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Phone className="w-4 h-4" />
                  <p className="text-base">{property.phone}</p>
                </a>
              )}
              {property.email && (
                <a
                  href={`mailto:${property.email}`}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Mail className="w-4 h-4" />
                  <p className="">{property.email}</p>
                </a>
              )}
              {property.twitter && (
                <a
                  href={property.twitter}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Twitter className="w-4 h-4" />
                  <p className="text-base">Twitter</p>
                </a>
              )}
              {property.instagram && (
                <a
                  href={property.instagram}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Instagram className="w-4 h-4" />
                  <p className="text-base">Instagram</p>
                </a>
              )}
              {property.facebook && (
                <a
                  href={property.facebook}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Facebook className="w-4 h-4" />
                  <p className="text-base">Facebook</p>
                </a>
              )}
              {property.youtube && (
                <a
                  href={property.youtube}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Youtube className="w-4 h-4" />
                  <p className="text-base">Youtube</p>
                </a>
              )}
              {property.tiktok && (
                <a
                  href={property.tiktok}
                  className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
                >
                  <Youtube className="w-4 h-4" />
                  <p className="text-base">Tiktok</p>
                </a>
              )}
              {property.linkedin && (
                <a
                  href={property.linkedin}
                  className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
                >
                  <Linkedin className="w-4 h-4 text-gray-500" />
                  <p className="text-base text-gray-500">Linkedin</p>
                </a>
              )}
            </div>
            <p className="text-lg text-gray-500">{property.long_description}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
