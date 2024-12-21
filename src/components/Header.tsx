import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";

import { Property } from "@/schemas/properties";

const details = {
  name: "Joe Shmoe Plumbing",
  description:
    "At Joe Shmoe Plumbing, we are dedicated to providing top-notch plumbing services to our customers. With years of experience in the industry, we have the knowledge and expertise to handle any plumbing issue.",
  phone: "(555) 555-5555",
  email: "joe@shmoeplumbing.com",
  instagram: "https://www.instagram.com/joe_shmoe_plumbing",
  facebook: "https://www.facebook.com/joe_shmoe_plumbing",
  twitter: "https://www.twitter.com/joe_shmoe_plumbing",
  youtube: "https://www.youtube.com/joe_shmoe_plumbing",
  tiktok: "https://www.tiktok.com/joe_shmoe_plumbing",
  linkedin: "https://www.linkedin.com/joe_shmoe_plumbing",
};

export const Header = ({ property }: { property: Property }) => {
  return (
    <header className="border-b-4 border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center md:gap-8 py-8 md:py-12">
          <figure className="border-2 border-neutral-300 min-w-52 w-1/2 md:w-full h-auto aspect-square mx-auto md:mx-0 bg-gray-200">
            <picture>
              <img src="/images/profile.jpg" alt="Profile" />
            </picture>
          </figure>
          <div className="py-12 flex flex-col items-start gap-4">
            <h1 className="text-4xl text-center font-bold">{details.name}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${details.phone}`}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">{details.phone}</p>
              </a>
              <a
                href={`mailto:${details.email}`}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Mail className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">{details.email}</p>
              </a>
              <a
                href={details.instagram}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Instagram className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">Instagram</p>
              </a>
              <a
                href={details.facebook}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Facebook className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">Facebook</p>
              </a>
              <a
                href={details.youtube}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Youtube className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">Youtube</p>
              </a>
              <a
                href={details.tiktok}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Youtube className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">Tiktok</p>
              </a>
              <a
                href={details.linkedin}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-500"
              >
                <Linkedin className="w-4 h-4 text-gray-500" />
                <p className="text-base text-gray-500">Linkedin</p>
              </a>
            </div>
            <p className="text-lg text-gray-500">{details.description}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
