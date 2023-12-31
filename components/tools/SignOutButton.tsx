"use client";
import React from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Button>
  );
};

export default SignOutButton;
