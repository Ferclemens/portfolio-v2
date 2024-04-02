"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <motion.section
      className="flex items-center justify-center py-32 mx-7 flex-col-reverse sm:flex-row sm:mx-10 sm:py-20 lg:py-24"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.17 }}
      id="home"
    >
      <Image
        src="/avatar.png"
        alt="Cartoon image to presentation"
        width={300}
        height={300}
        className="pt-10 sm:p-4 lg:p-0"
      />
      <div className="text-gray-700 flex flex-col sm:p-4 lg:p-16">
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
        <div className="flex justify-between  items-center text-center sm:max-w-[28rem] lg:max-w-[30rem]">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 p-3 w-30 sm:w-36 lg:w-40 bg-[#21414d] rounded-full text-xs sm:text-sm lg:text-lg text-white hover:scale-110 transition"
          >
            Contact Me <BsArrowRight className="" />
          </Link>
          <a
            href="/ferclemens-cv.pdf"
            download
            className="flex items-center justify-center gap-2 p-3 w-30 sm:w-36 lg:w-40 bg-gray-600 rounded-full text-xs sm:text-sm lg:text-lg text-white hover:scale-110 transition"
          >
            Dowload CV <HiDownload className="" />
          </a>
          <a href="https://www.linkedin.com/in/foclemens/" target="_blank">
            <Image
              src="/linkedin-logo.webp"
              alt="LinkedIn logo"
              width={30}
              height={30}
              className="hover:scale-110 transition"
            />
          </a>
          <a href="https://github.com/Ferclemens" target="_blank">
            <Image
              src="/github-mark.svg"
              alt="GitHub logo"
              width={32}
              height={32}
              className="hover:scale-125 transition"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
