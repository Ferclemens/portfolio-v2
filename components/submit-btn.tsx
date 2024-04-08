import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="h-12 w-full bg-[#21414d] hover:bg-[#32748c] active:scale-95 disabled:scale-100 disabled:bg-[#21414d] transition text-white rounded-lg flex justify-center items-center gap-4"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="w-5 h-5 pr-2 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit <FaPaperPlane />
        </>
      )}
    </button>
  );
}
