"use client";

import { cn } from "@/lib/utils";

import { CopyButton } from "./copy-button";

export const CopyableText = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <blockquote
      className={cn(
        "relative bg-muted border border-border p-4 rounded-md",
        className,
      )}
    >
      {text && <CopyButton text={text} />}
      {text ? (
        <p className="text-base">{text}</p>
      ) : (
        <p className="text-base text-muted-foreground italic cursor-not-allowed">
          No text provided
        </p>
      )}
    </blockquote>
  );
};
