import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full bg-slate-950 text-white p-8 flex flex-row justify-between">
      <div>
        <h1 className="tracking-widest font-black font-krypton text-4xl">
          HYPRCRD
        </h1>
      </div>
      <div className="space-x-4">
        <Link href="/sign-up" className="">
          Sign up
        </Link>
        <Link href="/sign-in" className="">
          Sign in
        </Link>
      </div>
    </div>
  );
}
