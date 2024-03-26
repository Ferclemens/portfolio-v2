"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-16 w-full rounded-none border border-white border-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-sm bg-white sm:top-4 sm:h-14 sm:w-[36rem] sm:rounded-lg"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
    </header>
  );
}
