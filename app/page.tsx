"use client";

import { useState } from "react";
import { SignUpForm, SignInForm } from "@/components/auth-forms";

export default function Home() {
  const [modal, setModal] = useState<string>("signup");
  return (
    <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row min-h-screen">
      <div className="bg-slate-950 w-full sm:w-1/2 h-[150px] sm:min-h-screen text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-9xl tracking-widest font-black font-krypton">
          HYPRCRD
        </h1>
        <p className="text-xs sm:text-md font-krypton">
          your visual resume and cyberspace connection hub.
        </p>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
        {modal === "signup" ? (
          <SignUpForm setModal={setModal} />
        ) : (
          <SignInForm setModal={setModal} />
        )}
      </div>
    </div>
  );
}
