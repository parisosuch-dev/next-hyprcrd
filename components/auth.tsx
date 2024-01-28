import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FaApple, FaGoogle } from "react-icons/fa";

export function OR() {
  return (
    <div className="flex flex-row w-full items-center justify-center space-x-4">
      <Separator orientation="horizontal" className="w-1/3" />
      <p>OR</p>
      <Separator orientation="horizontal" className="w-1/3" />
    </div>
  );
}

export function Google({ mode }: { mode: string }) {
  return (
    <Button className="space-x-2">
      <FaGoogle size={20} />
      <p>
        {mode === "sign-in" ? "Sign in with Google" : "Sign up with Google"}
      </p>
    </Button>
  );
}

export function Apple({ mode }: { mode: string }) {
  return (
    <Button className="space-x-2">
      <FaApple size={20} />
      <p>{mode === "sign-in" ? "Sign in with Apple" : "Sign up with Apple"}</p>
    </Button>
  );
}
