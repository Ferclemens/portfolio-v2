"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { activeSection, setActiveSection, lastClickTime, setlastClickTime } =
    useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, lastClickTime]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="flex items-center justify-center scroll-mt-40 mx-7 my-28 sm:mx-10  lg:my-32"
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
