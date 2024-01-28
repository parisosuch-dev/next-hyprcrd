"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import { FaGoogle, FaApple } from "react-icons/fa";
import { SetStateAction } from "react";

function OR() {
  return (
    <div className="flex flex-row justify-between items-center">
      <Separator className="w-1/3" />
      <p>OR</p>
      <Separator className="w-1/3" />
    </div>
  );
}

// auth providers
function Google({ mode }: { mode: string }) {
  return (
    <Button>
      <div className="flex flex-row items-center space-x-3">
        <FaGoogle size={22} />
        <p>
          {mode === "signup" ? "Sign Up with Google" : "Sign In with Google"}
        </p>
      </div>
    </Button>
  );
}

function Apple({ mode }: { mode: string }) {
  return (
    <Button>
      <div className="flex flex-row items-center space-x-3">
        <FaApple size={24} />
        <p className="">
          {mode === "signup" ? "Sign Up with Apple" : "Sign In with Apple"}
        </p>
      </div>
    </Button>
  );
}

function SignInForm({
  setModal,
}: {
  setModal: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="space-y-4 w-[300px] sm:w-1/2">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">Sign in to your account</h1>
        <p className="font-light">Enter your credentials</p>
      </div>
      <div className="space-y-2">
        <Input placeholder="name@example.com" />
        <Input placeholder="password" />
      </div>

      <Button className="w-full">Sign In</Button>
      <OR />
      <div className="flex flex-col space-y-2">
        <Google mode="signin" />
        <Apple mode="signup" />
      </div>
      <p className="text-center">
        Don't have an account?{" "}
        <button
          onClick={() => {
            setModal("signup");
          }}
          className="underline"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

function SignUpForm({
  setModal,
}: {
  setModal: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="space-y-4 w-[300px] sm:w-1/2 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">Create an account</h1>
        <p className="font-light">
          Enter your email below to start creating your account
        </p>
      </div>
      <div className="space-y-2">
        <Input placeholder="name@example.com" />
        <Input placeholder="password" />
      </div>

      <Button className="w-full">Sign up with email</Button>
      <OR />
      <div className="flex flex-col space-y-2">
        <Google mode="signup" />
        <Apple mode="signup" />
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <button
          onClick={() => {
            setModal("signin");
          }}
          className="underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
}

export { SignInForm, SignUpForm };
