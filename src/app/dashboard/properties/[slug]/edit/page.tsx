import { MainContent } from "@/app/dashboard/_components/MainContent";
import { PageHeader } from "@/app/dashboard/_components/PageHeader";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <div>
      <PageHeader title="Edit Property" />
      <MainContent>{slug}</MainContent>
    </div>
  );
}
