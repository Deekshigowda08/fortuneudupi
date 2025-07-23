'use client'
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const dynamic = 'force-dynamic'

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course");

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => setSubmitted(true))
      .catch((error) => console.error("FAILED...", error.text));
  };

  return (
    <div className="w-full max-w-xl bg-gradient-to-b from-[#343434] to-[#000000] backdrop:blur-2xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-10 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
        Register for {(course || "Unknown").replace(/_/g, " ")}
      </h1>

      {submitted ? (
        <div className="text-center text-green-400 text-lg font-medium">
          ✅ Registration submitted!<br /> We'll reach out to you soon.
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-sm sm:text-base">
          <input type="hidden" name="course" value={course || "Unknown"} />
          {/* form fields below... */}
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="full_name"
              required
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-xl"
              placeholder="Rajat Kumar"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-xl"
              placeholder="9999999999"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Gmail ID</label>
            <input
              type="email"
              name="gmail"
              required
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-xl"
              placeholder="you@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Selected Course</label>
            <input
              type="text"
              value={(course || "Unknown").replace(/_/g, " ")}
              disabled
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-xl text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-br from-[#73c0ff] to-[#1f009a] text-white font-bold transition-all duration-200"
          >
            Submit Registration
          </button>
        </form>
      )}
    </div>
  );
}
