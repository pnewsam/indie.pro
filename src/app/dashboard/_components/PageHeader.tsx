"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dashboardRegex = /^\/dashboard$/;
const propertiesRegex = /^\/dashboard\/properties$/;
const propertyDetailsRegex = /^\/dashboard\/properties\/[^\/]+$/;
const propertyEditRegex = /^\/dashboard\/properties\/[^\/]+\/edit$/;

const getSegments = (pathname: string): { name: string; href: string }[] => {
  if (pathname.match(propertyEditRegex)) {
    const segments = pathname.split("/");
    const propertySlug = segments[segments.length - 2];
    return [
      { name: "Dashboard", href: "/dashboard" },
      { name: propertySlug, href: `/dashboard/properties/${propertySlug}` },
      {
        name: "Edit",
        href: `/dashboard/properties/${propertySlug}/edit`,
      },
    ];
  } else if (pathname.match(propertyDetailsRegex)) {
    const segments = pathname.split("/");
    const propertySlug = segments[segments.length - 1];
    return [
      { name: "Dashboard", href: "/dashboard" },
      { name: propertySlug, href: `/dashboard/properties/${propertySlug}` },
    ];
  } else if (
    pathname.match(propertiesRegex) ||
    pathname.match(dashboardRegex)
  ) {
    return [{ name: "Dashboard", href: "/dashboard" }];
  } else if (pathname === "/dashboard/settings") {
    return [{ name: "Settings", href: "/dashboard/settings" }];
  }

  return [];
};

export function PageHeader({ actions }: { actions?: React.ReactNode }) {
  const pathname = usePathname();
  const segments = getSegments(pathname);

  return (
    <div className="w-full p-4 h-16 border-b bg-neutral-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-2">
          {segments.map((segment, index) => (
            <div key={segment.href} className="flex items-center">
              <Link
                href={segment.href}
                className="text-xl font-bold hover:text-blue-600"
              >
                {segment.name}
              </Link>
              {index < segments.length - 1 && (
                <span className="mx-2 text-gray-400">
                  <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
    </div>
  );
}
