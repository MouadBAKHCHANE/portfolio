"use client";

import Link from "next/link";
import { ArrowRight, User, CheckCircle2, Database } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoCarousel from "./LogoCarousel";
import { useState, useEffect } from "react";

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
    const { greeting, name_prefix, name, intro_text, cta_primary, cta_secondary, stats, logos } = content;

    return (
        <section id="id_home" className="relative pt-32 md:pt-40 lg:pt-28 lg:pb-16 overflow-hidden bg-background flex flex-col">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.4] mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48 relative z-10">
                <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-start lg:items-center">
                    {/* Left Column: Content */}
                    <div className="max-w-3xl pt-0 text-center lg:text-left mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] text-center lg:text-left">
                                <span className="text-slate-700 text-2xl lg:text-5xl mr-0 lg:mr-3 block lg:inline">{greeting} {name_prefix}</span>
                                <span className="relative z-10 inline-block text-blue-600 mt-2">
                                    {name}
                                    <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-200/50 -rotate-1 -z-10 rounded-full blur-sm"></span>
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base md:text-xl text-slate-600 mb-6 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            {intro_text}
                        </motion.p>



                        {/* Trusted By Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="hidden lg:block w-full max-w-xl lg:max-w-none mx-auto lg:mx-0"
                        >
                            <LogoCarousel />
                        </motion.div>
                    </div>




                    {/* Right Column: Image & Buttons */}
                    {/* Right Column: Image & Buttons */}
                    {/* Right Column: Image & Buttons */}
                    <div className="relative flex flex-col lg:h-full min-h-0 md:min-h-[400px] lg:min-h-[500px] items-center lg:items-end justify-start pt-0 lg:pt-0 -mt-20 lg:mt-0 gap-3 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-[200px] h-[280px] md:w-[260px] md:h-[350px]">
                                <Image
                                    src="/avatar.png"
                                    alt={name}
                                    fill
                                    className="object-contain object-bottom drop-shadow-2xl"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />

                                {/* Microsoft Badge Overlay  */}
                                <div className="absolute bottom-4 right-0 md:-right-4 bg-white p-2 md:p-3 rounded-xl shadow-xl flex items-center gap-2 md:gap-3 border border-slate-100 animate-bounce-slow max-w-[170px] md:max-w-[200px] z-20">
                                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                        <CheckCircle2 size={16} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-[10px] leading-tight">MICROSOFT Certified</p>
                                        <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Data Analyst Associate</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Buttons moved here */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-row gap-3 sm:gap-4"
                        >
                            <Link
                                href="#id_projects"
                                className="group px-5 py-2.5 md:px-8 md:py-4 text-xs md:text-base bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:scale-105"
                            >
                                {cta_primary}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#id_contact"
                                className="px-5 py-2.5 md:px-8 md:py-4 text-xs md:text-base bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center justify-center shadow-sm hover:scale-105"
                            >
                                {cta_secondary}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Counter({ value }: { value: string }) {
    const numericValue = parseInt(value, 10);

    if (isNaN(numericValue)) return <span>{value}</span>;

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <AnimationNumber value={numericValue} />
        </motion.span>
    );
}

function AnimationNumber({ value }: { value: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        if (end === 0) return;

        const totalFrames = Math.min(end, 60);
        const incrementTime = duration / totalFrames;
        const step = Math.ceil(end / totalFrames);

        let timer = setInterval(() => {
            start += step;
            if (start > end) start = end;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value]);

    return <>{count}</>;
}
