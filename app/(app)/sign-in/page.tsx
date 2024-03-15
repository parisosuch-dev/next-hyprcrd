"use client";
import { useState, useEffect } from "react";
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
import { Google, OR, Apple, UserAlreadySignedIn } from "@/components/auth";
import Link from "next/link";
import { UseUser } from "@/lib/appwrite/user";
import { AppwriteException } from "appwrite";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user, loading } = UseUser();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await login(email, password);
      // success, go to my-account
      router.push('/my-account')
    } catch (error) {
      const err = error as AppwriteException;
      setError(err.message);
    }

  }

  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center bg-slate-950">
      {loading ? null : user ? <UserAlreadySignedIn /> : <Card className="sm:w-1/3 z-10">
        <CardHeader className="text-center">
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {error ? <p className="text-xs sm:text-sm text-rose-500">{error}</p> : null}
            <Button
              className="w-full text-sm sm:text-base"
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <OR />
            <Google mode="sign-in" />
          </div>
        </CardContent>
        <CardFooter className="space-x-1 flex justify-center text-xs sm:text-sm">
          <p>Don&apos;t have an account?</p>
          <Link href="/sign-up" className="underline">
            Sign up
          </Link>
        </CardFooter>
      </Card>}

    </div>
  );
}
