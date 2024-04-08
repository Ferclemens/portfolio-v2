"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="flex items-center justify-center scroll-mt-40 lg:scroll-mt-40 sm:scroll-mt-16 mx-7 my-28 sm:mx-10 sm:my-8 lg:my-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.17 }}
    >
      <div className="text-lg sm:text-xl text-center p-8 max-w-lg sm:max-w-2xl">
        <SectionHeading>About Me</SectionHeading>
        <p>
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
