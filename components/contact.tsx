"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s3w9999", "template_t7631ql", form.current, {
        publicKey: "nEs5zVUlEH70bVKDI",
      })
      .then(
        () => {
          toast.success("Email enviado!");
        },
        (error) => {
          toast.error(error);
        }
      );
  };

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
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 mt-10 w-full sm:max-w-[25rem] dark:text-gray-800"
      >
        <input
          className="h-10 rounded-lg p-3 focus:outline-[#21414d]"
          type="email"
          placeholder="Tu mail"
          required
          maxLength={100}
          name="user_email"
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
