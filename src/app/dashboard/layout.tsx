import type { Metadata } from "next";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { DashboardSidebar } from "./_components/DashboardSidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <SidebarProvider defaultOpen={true}>
        <div className="grid grid-cols-[auto_1fr]">
          <DashboardSidebar />
          <main className="min-h-screen w-[calc(100vw-256px)] flex-grow shrink-0">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
