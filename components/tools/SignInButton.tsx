"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Button from "./Button";

const SignInButton = () => {
  return <Button onClick={() => void signIn("google")}>Sign In</Button>;
};

export default SignInButton;
