import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import toast, { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeBtn from "@/components/theme-btn";
import ThemeContextProvider from "@/context/theme-context";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 dark:bg-gray-700 dark:text-gray-100`}
      >
        <div className="bg-blue-500 fixed top-14 left-14 h-52 w-52 rounded-full blur-[10rem] z-[-1]"></div>
        <div className="bg-teal-400 fixed bottom-0 right-4 h-52 w-52 rounded-full blur-[10rem] z-[-1]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
