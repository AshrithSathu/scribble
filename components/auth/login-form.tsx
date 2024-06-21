"use client";

import { AuthCard } from "./auth-card";

export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle={"welcome back"}
      backButtonHref={"/auth/register"}
      backButtonLabel={"create a new account"}
      showSocials={true}
    >
      <div>{/* <h1>Hello</h1> */}</div>
    </AuthCard>
  );
};
