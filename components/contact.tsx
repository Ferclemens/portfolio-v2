"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center scroll-mt-40 mx-7 my-28 sm:mx-10  lg:my-32"
      id="contact"
    >
      <SectionHeading>Contact</SectionHeading>
      <p>
        Contact me directly at{" "}
        <a className="underline" href="mailto:foclemens@gmail.com">
          foclemens@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={sendEmail}
        className="flex flex-col gap-4 mt-10 w-full sm:max-w-[26rem]"
      >
        <input
          className="h-10 rounded-lg p-3 focus:outline-[#21414d]"
          type="email"
          placeholder="your mail"
          required
          maxLength={100}
          name="email"
        />
        <textarea
          className="h-40 rounded-lg p-3 focus:outline-[#21414d]"
          placeholder="your message"
          required
          maxLength={800}
          name="message"
        ></textarea>
        <button
          className="h-12 w-full bg-[#21414d] hover:bg-[#32748c] active:scale-95 disabled:scale-100 disabled:bg-[#21414d] transition text-white rounded-lg flex justify-center items-center gap-4"
          type="submit"
        >
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
