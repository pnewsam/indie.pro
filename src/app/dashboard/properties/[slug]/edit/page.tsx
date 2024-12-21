import { MainContent } from "@/app/dashboard/_components/MainContent";
import { PageHeader } from "@/app/dashboard/_components/PageHeader";

export default function EditPropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <PageHeader title="Edit Property" />
      <MainContent>asd</MainContent>
    </div>
  );
}
