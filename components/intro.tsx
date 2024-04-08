"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { setlastClickTime, setActiveSection } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      className="flex items-center justify-center py-32 mx-7 flex-col-reverse sm:flex-row sm:mx-10 sm:py-20 lg:py-28 scroll-mt-32"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src="/avatar.png"
          alt="Cartoon image to presentation"
          width={300}
          height={300}
          className="pt-10 sm:p-4 lg:p-0"
        />
      </motion.div>
      <motion.div
        className="flex flex-col sm:p-4 lg:p-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold">
          Hello! I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Fernando",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-lg sm:text-xl py-7 sm:py-5 lg:py-8 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat
          ipsum!
        </p>
        <div className="flex gap-1 sm:gap-3 lg:gap-4  items-center text-center sm:max-w-[28rem] lg:max-w-[30rem]">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 p-2 py-3 w-30 sm:w-36 lg:w-40 bg-[#21414d]/80 rounded-full text-xs sm:text-sm lg:text-lg text-white hover:scale-105 transition dark:bg-[#377388]"
            onClick={() => {
              setlastClickTime(Date.now());
              setActiveSection("Contact");
            }}
          >
            Contact Me <BsArrowRight className="" />
          </Link>
          <a
            href="/ferclemens-cv.pdf"
            download
            className="flex items-center justify-center gap-2 p-2 py-3 w-30 sm:w-36 lg:w-40 bg-gray-500/50 rounded-full text-xs sm:text-sm lg:text-lg text-white hover:scale-105 transition dark:bg-white/10"
          >
            Dowload CV <HiDownload className="" />
          </a>
          <a
            className="bg-white/60 p-2 text-gray-700/60 hover:text-gray-950 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/foclemens/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white/60 p-2 text-gray-700/60 flex items-center text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Ferclemens"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
