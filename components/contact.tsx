"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center scroll-mt-40 lg:scroll-mt-20 sm:scroll-mt-16 mx-7 my-28 sm:mx-10  lg:my-32 "
      id="contact"
    >
      <SectionHeading>Contacto</SectionHeading>
      <p>
        Contáctame directamente en{" "}
        <a className="underline" href="mailto:foclemens@gmail.com">
          foclemens@gmail.com
        </a>{" "}
        o a través de este formulario.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log(error);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email enviado!");
        }}
        className="flex flex-col gap-4 mt-10 w-full sm:max-w-[25rem] dark:text-gray-800"
      >
        <input
          className="h-10 rounded-lg p-3 focus:outline-[#21414d]"
          type="email"
          placeholder="Tu mail"
          required
          maxLength={100}
          name="email"
        />
        <textarea
          className="h-40 rounded-lg p-3 focus:outline-[#21414d]"
          placeholder="Mensaje"
          required
          maxLength={800}
          name="message"
        ></textarea>
        <SubmitBtn />
      </form>
    </section>
  );
}
