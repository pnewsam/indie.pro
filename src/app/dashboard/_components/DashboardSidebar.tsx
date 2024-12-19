import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { UserMenu } from "./UserMenu";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b h-16">
        <h1 className="text-lg font-bold">Indie Pro Websites</h1>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarMenuItem className="flex">
            <Link
              className="w-full p-2 rounded-md hover:bg-gray-100"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex">
            <Link
              className="w-full p-2 rounded-md hover:bg-gray-100"
              href="/dashboard/settings"
            >
              Settings
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
