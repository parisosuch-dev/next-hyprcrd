'use client'

import StarField from "@/components/starfield"
import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="bg-slate-950 w-full min-h-screen text-center text-white flex flex-col items-center justify-center">
            <StarField starCount={1000} speed={0.15} backgroundColor="black" />
            <div className="space-y-0 sm:space-y-2">
                <h1 className="text-4xl sm:text-9xl font-black font-space">
                    404 NOT FOUND
                </h1>
                <br className="border-2 border-t-2 border-white" />
                <p className="text-sm sm:text-lg font-space">the resource does not exist.</p>
                <p className="text-sm sm:text-lg font-space">you also might be lost in space.</p>
            </div>
            <Button variant="secondary" className="mt-4 sm:mt-8" onClick={() => router.back()}>take me back</Button>
        </div>
    )
}