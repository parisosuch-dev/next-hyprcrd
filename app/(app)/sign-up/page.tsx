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

export default function SignIn() {
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
              <Label>Email</Label>
              <Input placeholder="me@example.com" type="email" />
            </div>
            <div>
              <Label>Password</Label>
              <Input placeholder="some secret" type="password" />
            </div>
            <Button className="w-full text-sm sm:text-md">
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
