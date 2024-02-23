"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
import { AlreadyLoggedIn } from "@/components/auth";
import { BarLoader } from "react-spinners";

import { getAccount, signUp } from "@/lib/appwrite/auth";
import { account } from "@/lib/appwrite/client";
import { AppwriteException, Models } from "appwrite";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

  const router = useRouter();

  const handleSignUp = () => {
    setLoading(true);
    signUp(email, password).then((res) => {
      setError("");
      setLoading(false);
      account.createEmailPasswordSession(email, password).then((sesh) => {
        // do nothing
      }).catch((e) => {
        console.log(e);
      })
      router.push("/my-account");
    }).catch((e: AppwriteException) => {
      setError(e.message);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAccount().then((res) => {
      setUser(res);
    }).catch((e) => {
      setUser(null);
    });
  }, []);

  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center bg-slate-950 px-4">
      {user ? <AlreadyLoggedIn/>
      :
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
      </Card>}
      
    </div>
  );
}
