import { MainContent } from "../_components/main-content";
import { PageHeader } from "../_components/page-header";

export default function SettingsPage() {
  return (
    <div>
      <PageHeader />
      <MainContent>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">General</h2>
        </div>
      </MainContent>
    </div>
  );
}
