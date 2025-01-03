import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const DownloadButton = ({ url, alt }: { url: string; alt: string }) => {
  const onClickDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = alt;
    link.click();
    link.remove();
  };

  return (
    <Button variant="outline" onClick={onClickDownload}>
      Download
      <DownloadIcon className="w-4 h-4" />
    </Button>
  );
};
