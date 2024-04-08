"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeBtn from "./theme-btn";

export default function Header() {
  const { activeSection, setActiveSection, lastClickTime, setlastClickTime } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-20 w-full rounded-none border border-white border-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-sm bg-white bg-opacity-85 sm:top-1 sm:h-14 sm:w-[39rem] sm:rounded-lg dark:bg-gray-800 dark:border-black/10 dark:bg-opacity-85"
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
              <a
                className={clsx(
                  "flex w-full items-center justify-center p-2 transition",
                  { "text-white": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setlastClickTime(Date.now());
                  setActiveSection(link.name);
                }}
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
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <ThemeBtn />
    </header>
  );
}
