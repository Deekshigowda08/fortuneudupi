'use client';

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [message, setMessage] = useState("");

    async function sendEmail(formData) {
        const serviceId = "service_x60lk15";
        const templateId = "template_a2ws7ad";
        const userId = "Tgc1a5b4bTe2c9nnp";

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then((response) => {
                toast("Email sent successfully!", { type: "success" });

                // Reset fields
                setEmail("");
                setMessage("");
                setname("");
            })
            .catch((error) => {
                toast("Failed to send message. Please try again.", { type: "error" });
                console.error("Failed to send email.", error);
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formRef.current) return;
        sendEmail({ name, email, message });
    };

    return (
        <section id="contact" className="bg-[#101129] text-white mt-20 flex flex-col gap-5">
            <h3 className="text-3xl sm:text-4xl font-bold text-center">Contact Us</h3>
            <ToastContainer />

            {/* Contact Form */}
            <div className="sm:w-[600px] sm:mx-auto mx-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-12 shadow-lg border border-white/10">
                <form ref={formRef}
                    onSubmit={handleSubmit} className="space-y-8">
                    <h2 className="text-xl sm:text-3xl font-semibold text-center mb-2">Send us an email</h2>

                    {/* Name */}
                    <div className="relative">
                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
                            placeholder="Your Name"
                            className="w-full rounded-md p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out text-black placeholder-gray-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Your Email"
                            className="w-full rounded-md p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out text-black placeholder-gray-400"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="5"
                            required
                            placeholder="Your Message"
                            className="w-full rounded-md p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out text-black placeholder-gray-400 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-4 rounded-md hover:bg-gray-200 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>


            {/* Contact Info */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-2">Contact Info</h2>
           <div className="space-y-3 text-center text-lg">
      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.facebook.com/YOUR_PAGE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/919743294616"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/fortune_udupi/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/YOUR_PROFILE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Contact Info */}
      <div className="space-y-1">
        <p>
          <FaPhoneAlt className="inline-block mr-2 text-blue-500" />
          <a href="tel:+919743294616" className="hover:underline text-white text-sm font-bold">+91-9743294616</a> /{" "}
          <a href="tel:+918618638126" className="hover:underline text-white text-sm font-bold">+91-8618638126</a>
        </p>
        <p>
          <MdEmail className="inline-block mr-2   text-red-400" />
          <a href="mailto:ficeudupi@gmail.com" className="hover:underline text-white text-sm font-bold">ficeudupi@gmail.com</a> /{" "}
          <a href="mailto:fortuneclassesin@gmail.com" className="hover:underline text-white text-sm font-bold">fortuneclassesin@gmail.com</a>
        </p>
      </div>

      {/* Location */}
      <p>
        <FaMapMarkerAlt className="inline-block mr-2 text-green-500" />
        <a
          href="https://maps.app.goo.gl/p67NYm99JPjzWzk47"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline px-1 text-white text-sm"
        >
          <strong>Head Office : </strong>Tulunadu Towers,1st Floor,Udupi 576101
        </a>
      </p>
      <p>
        <FaMapMarkerAlt className="inline-block mr-2 text-green-500" />
        <a
          href="https://maps.app.goo.gl/KcMUbs6KQoprC6L17?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text- px-1 text-sm"
        >
          <strong>Branch : </strong>Bailoor Comlpex,1st floor,UDUPI 576101
        </a>
      </p>
    </div>

            {/* Footer */}
            <footer className="bg-blue-900 text-white text-sm sm:text-base text-center p-3 mt-1">
                <p>&copy; {new Date().getFullYear()} Fortune Institute of Computer Education. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
