'use client'
import React, {JSX} from 'react'
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function AboutPage() :JSX.Element {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent mb-6">
                    Contact Us
                </h1>
                <p className="text-center text-gray-300 mb-10">
                    We’d love to hear from you. Choose your preferred way to reach out:
                </p>

                <div className="space-y-4">
                    <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-600 hover:bg-green-700 rounded-lg transition">
                        <FaWhatsapp className="text-2xl" />
                        <span className="font-medium text-white">WhatsApp Us</span>
                    </a>

                    <a href="mailto:contact@phoenix.com" className="flex items-center gap-4 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                        <FaEnvelope className="text-2xl" />
                        <span className="font-medium text-white">Email Us</span>
                    </a>

                    <a href="tel:+972501234567" className="flex items-center gap-4 p-4 bg-gray-700 hover:bg-gray-800 rounded-lg transition">
                        <FaPhone className="text-2xl" />
                        <span className="font-medium text-white">Call Us</span>
                    </a>
                </div>

                <div className="mt-12 text-center text-sm text-gray-400">
                    Or send us a message through our form below.
                </div>

                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input autoFocus={true} type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <button type="submit" className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition">
                        Send Message
                    </button>
                </form>

                <div className="mt-10 text-xs text-gray-400 text-center">
                    We usually respond within 24 hours.
                </div>
                <div className="mt-12 text-center">
                    <div className="text-xl tracking-widest text-gray-400">ᚱᛁᛋᛖ ᛟᚠ ᛏᚺᛖ ᛈᚺᛖᛟᚾᛁᚲᛋ</div>
                    <div className="text-sm text-gray-500">(Rise of the Phoenix – Elder Futhark Runes)</div>
                </div>
            </div>
        </div>
    //     <main
    //     className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 flex flex-col items-center justify-center">
    //     <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6 drop-shadow-lg">
    //         Get in Touch
    //     </h1>
    //
    //     <p className="text-lg text-gray-300 max-w-xl text-center mb-10">
    //         Have questions, suggestions, or just want to say hi? Feel free to drop us a message.
    //     </p>
    //
    //     <form className="w-full max-w-xl bg-gray-800 p-8 rounded-xl shadow-xl space-y-6 animate-fade-in-up">
    //         <div className="flex flex-col">
    //             <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-300">Name</label>
    //             <input type="text" id="name"
    //                    className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
    //         </div>
    //
    //         <div className="flex flex-col">
    //             <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-300">Email</label>
    //             <input type="email" id="email"
    //                    className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
    //         </div>
    //
    //         <div className="flex flex-col">
    //             <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-300">Message</label>
    //             <textarea id="message" rows={5}
    //                       className="px-4 py-2 rounded bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
    //         </div>
    //
    //         <button type="submit"
    //                 className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200 rounded font-semibold shadow-lg">
    //             Send Message
    //         </button>
    //     </form>
    //
    //     <div className="mt-12 opacity-70">
    //         <Image src="/assets/phoenix2.png" alt="Phoenix" width={100} height={100} className="mx-auto opacity-60"/>
    //     </div>
    // </main>
    )
}