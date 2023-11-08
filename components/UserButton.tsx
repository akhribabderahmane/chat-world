'use client'

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

const UserButton = ({session}:{session: Session | null}) => {
  if(!session) return (
    <Button onClick={()=> signIn() } variant={'outline'}>
      Sign In
    </Button>
  )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
         <UserAvatar image={session?.user?.image || null} name={session?.user?.name || null} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=''>
        <DropdownMenuLabel>{session?.user?.name}!!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=> signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
