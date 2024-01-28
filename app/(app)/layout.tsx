import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

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
    <html lang="en">
      <body className={`${krypton.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
