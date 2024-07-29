"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  console.log("email: ", email, "msj: ", message);

  if (!validateString(email, 100)) {
    return {
      error: "invalid email",
    };
  }
  if (!validateString(message, 800)) {
    return {
      error: "invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "foclemens@gmail.com",
      subject: "Message from Portfolio Contact form",
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error: unknown) {
    console.log("ERROR -> ", error);
    return { error: getErrorMessage(error) };
  }
  return { data };
};
