"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function UserButton({ user }: Session) {
  return (
    <div>
      <span className="text-white">{user?.name}</span>

      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}
