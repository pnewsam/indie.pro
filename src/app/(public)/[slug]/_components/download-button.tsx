import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const DownloadButton = ({
  url,
  alt,
  className,
}: {
  url: string;
  alt: string;
  className?: string;
}) => {
  const onClickDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = alt;
    link.click();
    link.remove();
  };

  return (
    <Button variant="outline" onClick={onClickDownload} className={className}>
      Download
      <DownloadIcon className="w-4 h-4" />
    </Button>
  );
};
