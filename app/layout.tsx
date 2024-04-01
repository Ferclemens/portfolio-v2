import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fer Clemens Portfolio",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-950`}>
        <div className="bg-blue-500 fixed top-14 left-14 h-52 w-52 rounded-full blur-[10rem] z-[-1]"></div>
        <div className="bg-teal-400 fixed bottom-0 right-4 h-52 w-52 rounded-full blur-[10rem] z-[-1]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
