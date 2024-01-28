import StarField from "@/components/starfield";

export default function Home() {
  return (
    <div className="bg-slate-950 w-full min-h-screen text-center text-white flex flex-col items-center justify-center">
      <StarField starCount={2000} speed={0.15} backgroundColor="black" />
      <h1 className="text-5xl sm:text-9xl tracking-widest font-black font-krypton">
        HYPRCRD
      </h1>
      <p className="text-xs sm:text-lg font-krypton">
        your visual resume and cyberspace connection hub.
      </p>
    </div>
  );
}
