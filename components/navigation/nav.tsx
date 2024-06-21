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
    <div className="py-6">
      <nav>
        <ul className="flex items-center justify-between px-4">
          <li>
            <Link href="/">
              <Logo />
            </Link>
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
    </div>
  );
}
