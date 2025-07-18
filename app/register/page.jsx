"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get("course");

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS service ID
        "your_template_id",     // Replace with your EmailJS template ID
        form.current,
        "your_user_public_key"  // Replace with your EmailJS public key
      )
      .then(
        () => setSubmitted(true),
        (error) => console.error("FAILED...", error.text)
      );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3a3a3a] to-[#000000] px-4 py-16">
      <div className="w-full max-w-xl bg-gradient-to-b from-[#343434] to-[#000000] backdrop:blur-2xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-10  text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
          Register for {course || "a Course"}
        </h1>

        {submitted ? (
          <div className="text-center text-green-400 text-lg font-medium">
            ✅ Registration submitted!<br /> We'll reach out to you soon.
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 text-sm sm:text-base"
          >
            <input type="hidden" name="course" value={course || "Unknown"} />

            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                name="full_name"
                required
                placeholder="Rajat Kumar"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="9876543210"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Gmail ID</label>
              <input
                type="email"
                name="gmail"
                required
                placeholder="you@gmail.com"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Selected Course</label>
              <input
                type="text"
                value={course || "Unknown"}
                disabled
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-xl text-gray-400 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              className=" cursor-pointer w-full py-3 rounded-xl bg-gradient-to-br from-[#73c0ff] to-[#1f009a] smooth  text-white font-bold transition-all duration-200"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Page;
