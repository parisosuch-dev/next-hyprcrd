"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Google, OR } from "@/components/auth";
import Link from "next/link";
import { UseUser } from "@/lib/appwrite/user";
import { addNewUser, usernameExists, validateUserName } from "@/lib/appwrite/auth";
import { AppwriteException } from "appwrite";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, user } = UseUser();
  const router = useRouter();

  const createUserAccount = async () => {
    if (!validateUserName(name)) {
      setError("Username does not fit username criteria. Username can only have alphabetical characters, numbers, and a length 0-30.");
      return;
    }

    if (await usernameExists(name)) {
      setError("User with name already exists.");
      return;
    }

    try {
      const newUser = await signup(email, password, name);
      await addNewUser(newUser);
      // success, go to my-account
      router.push('/my-account')
    } catch (error) {
      const err = error as AppwriteException;
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center bg-slate-950">
      <Card className="sm:w-1/3 z-10">
        <CardHeader className="text-center">
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Create an account with email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <Label>Username</Label>
              <Input
                placeholder="paris"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                placeholder="me@example.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                placeholder="some secret"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error ? <p className="text-xs sm:text-sm text-rose-500">{error}</p> : null}
            <Button
              className="w-full text-sm sm:text-base"
              onClick={createUserAccount}
            >
              Sign up with email
            </Button>
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <OR />
            <Google mode="sign-up" />
          </div>
        </CardContent>
        <CardFooter className="space-x-1 flex justify-center text-xs sm:text-sm">
          <p>Already have an account?</p>
          <Link href="/sign-in" className="underline">
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
