"use client";

import Link from "next/link";
import { ArrowRight, User, CheckCircle2, Database } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming we might use Next.js Image later, importing for standard practice

// Tech Logos (using text/icons for now as placeholders for actual SVGs)
// Tech Logos
// Tech Logos
// Tech Logos
// Stack removed, replaced by single badge inline

interface HeroProps {
    content: any;
}

export default function Hero({ content }: HeroProps) {
    const { availability, title_start, title_highlight, subtitle, cta_primary, cta_secondary } = content;

    return (
        <section id="id_home" className="relative pt-48 pb-32 overflow-hidden bg-slate-950 min-h-screen flex flex-col items-center justify-center">
            {/* Background Gradients (Matched to Reference) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-slate-300 text-sm font-medium">{availability}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    {title_start} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                        {title_highlight}
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl font-light"
                >
                    {subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 items-center mb-20"
                >
                    <Link
                        href="#id_projects"
                        className="group pl-1 pr-8 py-1.5 bg-emerald-500 text-slate-900 rounded-full font-bold hover:bg-emerald-400 transition-all flex items-center gap-4 text-lg shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] hover:scale-105"
                    >
                        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <User size={24} className="text-slate-900" />
                        </div>
                        {cta_primary}
                    </Link>
                    <Link
                        href="#id_contact"
                        className="px-8 py-4 bg-transparent border border-emerald-500/30 text-emerald-400 rounded-full font-medium hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                        {cta_secondary}
                    </Link>
                </motion.div>

                {/* Tech Stack Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center gap-2 opacity-80"
                >
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 w-6" />
                        <span className="text-slate-200 font-semibold tracking-wide">Microsoft Certified</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
