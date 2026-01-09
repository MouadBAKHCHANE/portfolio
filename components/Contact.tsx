"use client";

import { Mail, Linkedin, Github, CalendarCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContactProps {
    content: any;
}

export default function Contact({ content }: ContactProps) {
    const { badge, title_start, title_highlight, subtitle, email_button, logo_text, logo_sub } = content;

    return (
        <footer id="id_contact" className="bg-slate-50 text-slate-900 pt-24 pb-8 border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Booking Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-500/20 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden mb-20 shadow-2xl shadow-blue-900/20">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                                <CalendarCheck size={16} /> {badge}
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                                {title_start} <br />
                                <span className="text-blue-200">{title_highlight}</span>
                            </h2>
                            <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
                                {subtitle}
                            </p>

                            <a
                                href="mailto:bakhchanemouad@gmail.com"
                                className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-xl font-bold text-sm sm:text-base hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                            >
                                <Mail size={18} className="sm:hidden" />
                                <Mail size={20} className="hidden sm:block" />
                                {email_button}
                            </a>

                            {/* Phone Number Display */}
                            <div className="mt-8 flex items-center justify-center gap-2 text-blue-100/80">
                                <span className="text-sm font-medium">Call / WhatsApp:</span>
                                <a href={`tel:${content.phone?.replace(/\s/g, '')}`} className="text-white hover:text-blue-200 font-bold tracking-wide transition-colors">
                                    {content.phone}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-200">
                    <div className="mb-4 md:mb-0 flex items-baseline gap-2">
                        <span className="font-bold text-xl tracking-tight text-slate-900">{logo_text}</span>
                        <span className="text-blue-600 text-2xl font-[family-name:var(--font-dancing)]">{logo_sub}</span>
                    </div>

                    <div className="text-slate-500 text-sm">
                        © 2025 All rights reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://www.linkedin.com/in/mouad-bakhchane/" className="p-3 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://github.com/MouadBAKHCHANE" className="p-3 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all">
                            <Github size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
