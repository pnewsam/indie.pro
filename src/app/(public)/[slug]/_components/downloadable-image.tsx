"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { DownloadButton } from "./download-button";

export const DownloadableImage = ({
  className,
  url,
  alt,
}: {
  className?: string;
  url: string;
  alt: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={url}
        alt={alt}
        className="border"
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
      <DownloadButton
        className="absolute top-0 right-0"
        url={url}
        alt="Brand Image"
      />
    </div>
  );
};
