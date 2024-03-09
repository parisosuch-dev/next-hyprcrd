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
import { addNewUser, usernameExists } from "@/lib/appwrite/auth";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, user } = UseUser();

  const createUserAccount = async () => {
    // TODO: validate user name and then sign up user and create user doc
    if (await usernameExists(name)) {
      setError("User with name already exists.");
      return;
    }
    const newUser = await signup(email, password, name);

    await addNewUser(newUser);
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
            {error ? <p>{error}</p> : null}
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
