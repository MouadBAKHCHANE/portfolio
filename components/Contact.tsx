"use client";

import { Mail, Linkedin, Github, CalendarCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <footer id="id_contact" className="bg-slate-950 text-white pt-24 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Booking Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden mb-20">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                                <CalendarCheck size={16} /> Available for Freelance
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Ready to automate your <br />
                                <span className="text-emerald-400">financial reporting?</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                                Let's discuss how we can turn your manual Excel sheets into always-on dashboards.
                            </p>

                            <a
                                href="mailto:bakhchanemouad@gmail.com"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-slate-950 rounded-xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                            >
                                <Mail size={20} />
                                bakhchanemouad@gmail.com
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5">
                    <div className="mb-4 md:mb-0">
                        <span className="font-bold text-xl tracking-tight text-white">Mouad<span className="text-emerald-400">.Data</span></span>
                        <p className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://www.linkedin.com/in/mouad-bakhchane/" className="p-3 bg-white/5 border border-white/5 rounded-full text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://github.com/MouadBAKHCHANE" className="p-3 bg-white/5 border border-white/5 rounded-full text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors">
                            <Github size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
