import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/lib/appwrite/user";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space",
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
    <UserProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${spaceMono.variable} flex flex-col min-h-screen`}
        >
          {children}
        </body>
      </html>
    </UserProvider>
  );
}
