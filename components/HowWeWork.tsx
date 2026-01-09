"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart2, Zap, Users } from "lucide-react";

interface HowWeWorkProps {
    content: any;
}

const icons = [
    <BarChart2 className="text-blue-500" size={32} />,
    <Zap className="text-orange-500" size={32} />,
    <Users className="text-rose-500" size={32} />
];

const bgs = [
    "bg-blue-500/10 border-blue-500/20",
    "bg-orange-500/10 border-orange-500/20",
    "bg-rose-500/10 border-rose-500/20"
];

export default function HowWeWork({ content }: HowWeWorkProps) {
    const { title, subtitle, steps, cta } = content;

    return (
        <section id="id_how_we_work" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
            {/* Simple background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mt-48"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mb-16 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-rose-200 -z-10"></div>

                    {steps.map((step: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                            className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300 relative group shadow-sm hover:shadow-xl hover:shadow-blue-900/5"
                        >
                            <div className="absolute -right-4 top-8 hidden md:block z-20">
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.3 + 0.3 }}
                                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400"
                                    >
                                        <ArrowRight size={16} />
                                    </motion.div>
                                )}
                            </div>

                            <div className={`w-14 h-14 rounded-2xl ${bgs[index]} flex items-center justify-center mb-6`}>
                                {icons[index]}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 mb-6 min-h-[48px] text-sm leading-relaxed">
                                {step.description}
                            </p>

                            <div className="pt-6 border-t border-slate-100">
                                <p className="text-sm font-semibold text-blue-600 leading-snug">
                                    {step.deliverable}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Link
                        href="#id_contact"
                        className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all flex items-center gap-3 shadow-lg shadow-blue-500/20 hover:scale-105"
                    >
                        {cta}
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
