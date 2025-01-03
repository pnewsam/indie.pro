"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <Button
      variant="outline"
      className="absolute top-2 right-2"
      onClick={handleCopy}
    >
      {isCopied ? (
        <>
          <span className="text-green-500">Copied</span>
          <CheckIcon className="w-4 h-4 text-green-500" />
        </>
      ) : (
        <>
          <span>Copy</span>
          <CopyIcon className="w-4 h-4" />
        </>
      )}
    </Button>
  );
};
