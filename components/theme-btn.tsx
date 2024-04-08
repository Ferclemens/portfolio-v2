"use client";
import { useTheme } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed top-[94%] sm:top-[89%] left-[88%] bg-white/60 p-2 rounded-full hover:scale-[1.15] transition dark:bg-white/10"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
