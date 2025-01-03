"use client";

import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const MediaSection = ({
  className,
  label,
  url,
  alt,
  description,
}: {
  className?: string;
  label: string;
  url: string;
  alt: string;
  description?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="">
          <p className="text-lg font-medium tracking-tight">{label}</p>
          <p className="text-base text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="border inline-block">
        <picture className="w-40 h-auto">
          <img
            src={url}
            alt={alt}
            className="object-cover"
            width={160}
            height={160}
          />
        </picture>
      </div>
    </div>
  );
};
