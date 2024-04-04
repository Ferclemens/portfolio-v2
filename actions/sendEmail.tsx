"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
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
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "foclemens@gmail.com",
      subject: "Message from Portfolio form",
      reply_to: email as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
