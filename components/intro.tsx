"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <motion.section
      className="flex items-center justify-center my-32 mx-10 flex-col-reverse sm:flex-row"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="bg-gray-800 rounded-full my-10">
        <Image
          src="/avatar.png"
          alt="personal image to presentation"
          width={300}
          height={300}
        />
      </div>
      <div className="text-gray-600 flex flex-col sm:pl-16">
        <h1 className="text-4xl font-bold sm:text-6xl leading-[3rem] pt-6 sm:pt-0">
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
        <p className="text-lg sm:text-xl pt-10 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat
          ipsum!
        </p>
      </div>
    </motion.section>
  );
}
