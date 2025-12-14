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

interface HeroProps {
    content: any;
}

export default function Hero({ content }: HeroProps) {
    const { greeting, name_prefix, name, intro_text, cta_primary, cta_secondary } = content;

    return (
        <section id="id_home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 min-h-screen flex flex-col justify-center">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-12 leading-tight">
                            {greeting} {name_prefix} <span className="relative z-10 inline-block text-emerald-400">
                                {name}
                                <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-500/20 -rotate-1 -z-10 rounded-full blur-sm"></span>
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-emerald-500/50 -rotate-1 -z-10 rounded-full"></span>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {intro_text}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 items-center justify-center"
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
                </div>
            </div>
        </section>
    );
}
