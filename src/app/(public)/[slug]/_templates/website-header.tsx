import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Video,
  Youtube,
} from "lucide-react";

import { Property } from "@/schemas/properties";

import { SocialLink } from "./SocialLink";

export const WebsiteHeader = ({ property }: { property: Property }) => {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start md:gap-8 py-8 md:py-12">
          <figure className="border-2 border-neutral-300 min-w-52 w-1/2 md:w-full md:max-w-52 h-auto aspect-square mx-auto md:mx-0 mb-8 md:mb-0 bg-gray-200">
            <picture>
              <img
                src={property.logo_url ?? "/"}
                alt="Profile"
                className="object-cover"
              />
            </picture>
          </figure>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-4xl text-center font-bold">{property?.name}</h1>
            <div className="flex flex-wrap items-center gap-4">
              {property.phone && (
                <SocialLink
                  href={`tel:${property.phone}`}
                  icon={<Phone className="w-4 h-4" />}
                  label={property.phone}
                />
              )}
              {property.email && (
                <SocialLink
                  href={`mailto:${property.email}`}
                  icon={<Mail className="w-4 h-4" />}
                  label={property.email}
                />
              )}
              {property.twitter && (
                <SocialLink
                  href={property.twitter}
                  icon={<Twitter className="w-4 h-4" />}
                  label="Twitter"
                />
              )}
              {property.instagram && (
                <SocialLink
                  href={property.instagram}
                  icon={<Instagram className="w-4 h-4" />}
                  label="Instagram"
                />
              )}
              {property.facebook && (
                <SocialLink
                  href={property.facebook}
                  icon={<Facebook className="w-4 h-4" />}
                  label="Facebook"
                />
              )}
              {property.youtube && (
                <SocialLink
                  href={property.youtube}
                  icon={<Youtube className="w-4 h-4" />}
                  label="Youtube"
                />
              )}
              {property.tiktok && (
                <SocialLink
                  href={property.tiktok}
                  icon={<Video className="w-4 h-4" />}
                  label="Tiktok"
                />
              )}
              {property.linkedin && (
                <SocialLink
                  href={property.linkedin}
                  icon={<Linkedin className="w-4 h-4" />}
                  label="Linkedin"
                />
              )}
            </div>
            <p className="text-lg text-center md:text-left text-gray-500">
              {property.long_description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
