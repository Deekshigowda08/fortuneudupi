'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .sendForm(
                'your_service_id',
                'your_template_id',
                form.current,
                'your_public_key'
            )
            .then(
                () => {
                    setStatus('Message sent!');
                    form.current.reset();
                },
                () => {
                    setStatus('Something went wrong...');
                }
            );
    };

    return (
        <section id="contact" className="bg-black text-white mt-20 flex flex-col gap-5">
            <h3 className="text-3xl sm:text-4xl font-bold text-center">Contact Us</h3>

            {/* Contact Form */}
            <div className="sm:w-[600px] sm:mx-auto mx-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-12 shadow-lg border border-white/10">
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <h2 className="text-xl sm:text-3xl font-semibold text-center mb-2">Send us an email</h2>

                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Your Name"
                            className="w-full rounded-md p-3 bg-white border border-white focus:outline-none focus:ring-2 focus:ring-white transition-all text-black placeholder-gray-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="Your Email"
                            className="w-full rounded-md p-3 bg-white border border-white focus:outline-none focus:ring-2 focus:ring-white transition-all text-black placeholder-gray-400"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            name="message"
                            rows="5"
                            required
                            placeholder="Your Message"
                            className="w-full rounded-md p-3 bg-white border border-white focus:outline-none focus:ring-2 focus:ring-white transition-all text-black placeholder-gray-400 resize-none"
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