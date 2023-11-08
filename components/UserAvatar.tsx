import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
const UserAvatar = ({
  name,
  image,
  className,
}: {
  name: string | null;
  image: string | null;
  className?: string;
}) => {
  return (
    <Avatar className={cn(' text-xl outline-none',className)}>
        {image && <AvatarImage src={image || ""} alt={name || ""} width={40} height={40} className="rounded-full" />}
      <AvatarFallback className="bg-slate-800 dark:bg-white   dark:text-slate-700 text-white">
        {name?.split(" ").map((word)=> word[0]).join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
