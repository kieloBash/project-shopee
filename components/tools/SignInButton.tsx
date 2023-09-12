"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Button from "./Button";

const SignInButton = () => {
  return (
    <Button
      className="w-full max-w-md"
      textSize={"lg"}
      onClick={() => void signIn("google", { callbackUrl: "/dashboard" })}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
