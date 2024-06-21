"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex w-full flex-col items-center justify-around gap-4">
      <Button
        className="flex w-full gap-4"
        variant={"outline"}
        onClick={() =>
          signIn("google", {
            redirect: false,
            callbackUrl: "/",
          })
        }
      >
        <FcGoogle size={"20px"} /> Sign in With Google
      </Button>
      <Button
        variant={"outline"}
        className="flex w-full gap-4"
        onClick={() =>
          signIn("github", {
            redirect: false,
            callbackUrl: "/",
          })
        }
      >
        {" "}
        <FaGithub size={"20px"} />
        Sign in With Github
      </Button>
    </div>
  );
}
