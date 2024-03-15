import { FaApple, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";
import { UseUser } from "@/lib/appwrite/user";

export function OR() {
  return (
    <div className="flex flex-row w-full items-center justify-center space-x-4">
      <Separator orientation="horizontal" className="w-1/3" />
      <p className="text-xs md:text-sm">OR</p>
      <Separator orientation="horizontal" className="w-1/3" />
    </div>
  );
}

export function Google({ mode }: { mode: string }) {
  return (
    <Button className="space-x-2 text-sm sm:text-base">
      <FaGoogle size={15} />
      <p>
        {mode === "sign-in" ? "Sign in with Google" : "Sign up with Google"}
      </p>
    </Button>
  );
}

export function Apple({ mode }: { mode: string }) {
  return (
    <Button className="space-x-2 text-sm sm:text-md">
      <FaApple size={15} />
      <p>{mode === "sign-in" ? "Sign in with Apple" : "Sign up with Apple"}</p>
    </Button>
  );
}

export function UserAlreadySignedIn() {
  const router = useRouter();
  const { logout } = UseUser();

  return (
    <Card className="sm:w-1/3 z-10">
      <CardHeader className="text-center">
        <CardTitle>You are already signed in</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <Button onClick={() => {
          router.push("my-account")
        }}>Continue to my profile</Button>
        <Button variant="outline" onClick={() => {
          logout();
        }}>Sign out</Button>
      </CardContent>
    </Card>
  )
}
