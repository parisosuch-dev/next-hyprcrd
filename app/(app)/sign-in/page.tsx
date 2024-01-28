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
import { Google, OR, Apple } from "@/components/auth";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="sm:w-1/3">
        <CardHeader className="text-center">
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <Label>Email</Label>
              <Input placeholder="me@example.com" type="email" />
            </div>
            <div>
              <Label>Password</Label>
              <Input placeholder="some secret" type="password" />
            </div>
            <Button className="w-full">Sign in</Button>
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <OR />
            <Google mode="sign-in" />
            <Apple mode="sign-in" />
          </div>
        </CardContent>
        <CardFooter className="space-x-1 flex justify-center">
          <p>Don&apos;t have an account?</p>
          <Link href="/sign-up" className="underline">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
