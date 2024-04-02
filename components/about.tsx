"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="flex items-center justify-center scroll-mt-40 pb-32  mx-7 sm:mx-10 sm:scroll-mt-20 lg:my-32 lg:scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.17 }}
    >
      <div className="text-lg sm:text-xl text-center p-8 max-w-lg sm:max-w-2xl">
        <SectionHeading>About Me</SectionHeading>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat a
          nobis modi. Aliquam nam, distinctio eos itaque qui, nostrum
          blanditiis, reprehenderit ad quisquam voluptas ratione recusandae esse
          possimus asperiores id. Aliquam nam, distinctio eos itaque qui,
          nostrum blanditiis, reprehenderit.
        </p>
      </div>
    </motion.section>
  );
}
