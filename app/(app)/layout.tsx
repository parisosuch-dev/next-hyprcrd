import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

const krypton = localFont({
  src: [
    {
      path: "../../public/fonts/MonaspaceKrypton-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/MonaspaceKrypton-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/MonaspaceKrypton-ExtraBold.otf",
      weight: "800",
    },
  ],
  variable: "--font-krypton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYPRCRD",
  description: "Cyberspace gateway.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {children}
    </div>
  );
}
