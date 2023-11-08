import Logo from "./Logo";
import DarkModeToggle from "./ui/DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions); // here we store user data after authentification
  console.log(session);
  return (
    <header className=" sticky top-0 z-50 bg-white  dark:bg-gray-900 shadow-md">
      {/* LOGO */}
      <nav className=" flex flex-col sm:flex-row items-center p-2 pl-2 pr-6 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <Logo />
        <div className=" flex flex-row flex-1 items-center justify-center sm:justify-end space-x-3">
          {/* select language */}  

          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={"/pricing"} className="text-black dark:text-white">
              Pricing
            </Link>
          )}

          {/* dark mode toggle  */}
          <DarkModeToggle />

          {/* avatar */}
          <UserButton session={session} />
        </div>
      </nav>

      {/* upgrade plan */}
    </header>
  );
};

export default Header;
