"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-20 w-full rounded-none border border-white border-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-sm bg-white sm:top-2 sm:h-14 sm:w-[39rem] sm:rounded-lg"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed flex top-1 left-1/2 -translate-x-1/2 h-12 py-2 sm:top-3 sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 w-[20rem] items-center justify-center text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center p-3 transition",
                  { "text-white": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-400 text-white rounded-3xl absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
