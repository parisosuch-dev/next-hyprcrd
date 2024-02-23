"use client"

import { useState } from "react";
import Link from "next/link";

import { Google, OR } from "@/components/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarLoader } from "react-spinners"

import { signUp } from "@/lib/appwrite/auth";
import { AppwriteException } from "appwrite"


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    signUp(email, password).then((res) => {
      setError("");
      setLoading(false);
    }).catch((e: AppwriteException) => {
      setError(e.message);
      setLoading(false);
    });
  }

  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center bg-slate-950 px-4">
      <Card className="w-full sm:w-1/3 z-10">
        <CardHeader className="text-center">
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Create an account with email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <Label>Email</Label>
              <Input placeholder="me@example.com" type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Password</Label>
              <Input placeholder="some secret" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error ? <p className="text-xs text-center text-rose-600">{error}</p> : null}
            <Button className="w-full text-sm sm:text-base" onClick={handleSignUp}>
              {loading ? <BarLoader color="#FFFFFF" /> : "Sign up with email"}
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
