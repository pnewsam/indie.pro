"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { CopyButton } from "./copy-button";

export const CopyableText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <blockquote
      className={cn(
        "relative bg-muted border border-border p-4 rounded-md",
        className,
      )}
    >
      <CopyButton text={text} />
      <p className="text-base">{text}</p>
    </blockquote>
  );
};
