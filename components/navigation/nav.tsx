import Link from "next/link";
import { auth } from "../../server/auth";
import Logo from "./logo";
import UserButton from "./user-button";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

export default async function Nav() {
  const session = await auth();

  console.log(session);

  return (
    <nav className="bg-slate-500 py-4">
      <ul className="flex justify-between items-center px-4">
        <li>
          <Logo />
        </li>
        {!session ? (
          <Button asChild>
            <Link className="flex gap-2" href="/auth/login">
              <LogIn />
              <span className="ml-2">Login</span>
            </Link>
          </Button>
        ) : (
          <UserButton user={session?.user} expires={session?.expires} />
        )}
      </ul>
    </nav>
  );
}
