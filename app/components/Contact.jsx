'use client';

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [course, setcourse] = useState("");
    const [phone, setphone] = useState("");
    const [message, setMessage] = useState("");

    async function sendEmail(formData) {
        const serviceId = "service_3u9meos";
        const templateId = "template_xr75hbg";
        const userId = "RB2SELaSlhZIBBaI9";

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);

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
        sendEmail({ name, email, phone, course, message });
    };

    return (
        <section id="contact" className="bg-black text-white mt-20 flex flex-col gap-5">
            <h3 className="text-3xl sm:text-4xl font-bold text-center">Contact Us</h3>

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

                    {/* Status */}
                    {status && (
                        <p className="text-sm text-center text-gray-300">{status}</p>
                    )}
                </form>
            </div>


            {/* Contact Info */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-2">Contact Info</h2>
            <div className="space-y-4 text-lg text-center">
                <p><FaPhoneAlt className="inline-block mr-2 text-blue-500" /> +91-9743294616 / +91-8618638126</p>
                <p><MdEmail className="inline-block mr-2 text-red-400" /> ficeudupi@gmail.com / fortuneclassesin@gmail.com</p>
                <p><FaMapMarkerAlt className="inline-block mr-2 text-green-500" /> Tulunadu Towers, 1st Floor, Court Road, Udupi 576101</p>
            </div>

            {/* Footer */}
            <footer className="bg-blue-900 text-white text-sm sm:text-base text-center p-3 mt-4">
                <p>&copy; {new Date().getFullYear()} Fortune Institute of Computer Education. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
