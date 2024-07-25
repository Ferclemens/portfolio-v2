"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Info");

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
        <SectionHeading>Acerca de Mi</SectionHeading>
        <p>
          Estudiante de Tecnicatura en desarrollo de software, Con experiencia
          en creación de aplicaciones web. Empático, responsable y curioso.
          Predispuesto a nuevos desafíos para poner en práctica lo aprendido,
          conocer colegas y seguir desarrollando mi carrera en el mundo IT.
        </p>
      </div>
    </motion.section>
  );
}
