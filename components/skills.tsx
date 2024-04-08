"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col justify-center items-center scroll-mt-40 lg:scroll-mt-40 sm:scroll-mt-24 mx-7 my-32 lg:my-44 sm:mx-10"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className=" flex flex-wrap gap-4 justify-center items-center w-full sm:max-w-[40rem] lg:py-10 ">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              key={index}
              className="bg-white/40   border border-gray-500 rounded-lg px-2 py-2"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
