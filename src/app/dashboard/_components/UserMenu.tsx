"use client";

import { ChevronsUpDown, Loader2, LogOut, User } from "lucide-react";
import { Suspense } from "react";

import { logout } from "@/app/actions/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useUserContext } from "../_contexts/UserProvider";

export function UserMenu() {
  const user = useUserContext();

  return (
    <Suspense
      fallback={
        <Button>
          <Loader2 className="w-4 h-4 animate-spin" />
        </Button>
      }
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-auto" variant="outline">
            {user ? (
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={user.user_metadata.avatar_url} />
                  <AvatarFallback>{user.email?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm max-w-[140px] truncate">
                    {user.user_metadata.name ?? user.email}
                  </p>
                  <p className="text-xs max-w-[140px] text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
                <ChevronsUpDown className="w-4 h-4" />
              </div>
            ) : (
              <Loader2 className="w-4 h-4 animate-spin" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuItem asChild className="w-full">
            <Button
              className="w-[240px]"
              variant="ghost"
              onClick={() => logout()}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Suspense>
  );
}
