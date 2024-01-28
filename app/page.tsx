"use client";

import { useRouter } from "next/navigation";
import StarField from "@/components/starfield";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-slate-950 w-full min-h-screen text-center text-white flex flex-col items-center justify-center">
      <StarField starCount={1000} speed={0.15} backgroundColor="black" />
      <h1 className="text-6xl sm:text-9xl tracking-widest font-black font-krypton">
        HYPRCRD
      </h1>
      <p className="text-md sm:text-lg font-krypton">
        your visual resume and cyberspace connection hub.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-1/2 sm:w-full justify-center mt-6">
        <Button
          className="sm:w-1/6"
          variant="secondary"
          onClick={() => {
            router.push("/sign-in");
          }}
        >
          Sign in
        </Button>
        <Button
          className="sm:w-1/6"
          variant="secondary"
          onClick={() => {
            router.push("/sign-up");
          }}
        >
          Create your account
        </Button>
      </div>
    </div>
  );
}
