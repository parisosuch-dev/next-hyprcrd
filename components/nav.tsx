"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full bg-slate-950 text-white p-8 flex flex-row justify-between">
      <div className="w-1/2">
        <Link
          className="tracking-widest font-black font-krypton text-4xl"
          href="/"
        >
          HYPRCRD
        </Link>
      </div>
      <div className="w-1/2 space-x-4 text-xs sm:text-base sm:space-x-6 flex justify-end items-center text-center">
        <Link href="/sign-in" className="hover:underline">
          Sign In
        </Link>
        <Link href="/sign-up" className="hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
}
