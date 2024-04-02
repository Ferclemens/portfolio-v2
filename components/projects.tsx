"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center scroll-mt-40 pb-56  mx-7 sm:mx-10 sm:scroll-mt-28 lg:my-32 lg:scroll-mt-32"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-y-3">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.section
      className="group h-[30rem] sm:h-[17.5rem] max-w-2xl bg-gray-100 border border-black/5 rounded-lg relative overflow-hidden shadow-xl hover:bg-gray-200 transition cursor-pointer"
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <div className="p-4 w-full sm:max-w-[50%] sm:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold my-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="flex flex-wrap my-4 gap-2">
          {tags.map((tag, index) => {
            return (
              <li
                className="bg-black/[0.7] px-3 py-2 text-[0.8rem] tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-[65%] sm:top-8 sm:-right-[23rem] border border-black/5 shadow-xl rounded-lg group-hover:scale-110 sm:group-hover:-translate-x-2 sm:group-hover:translate-y-2 sm:group-hover:-rotate-2
        transition"
      />
    </motion.section>
  );
}
