"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialsProps {
    content: any;
}

export default function Testimonials({ content }: TestimonialsProps) {
    const { badge, title_start, title_highlight, items } = content;

    return (
        <section id="id_testimonials" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-emerald-900/5 to-slate-900/0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        {badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {title_start} <span className="text-emerald-400">{title_highlight}</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 p-8 rounded-3xl border border-white/5 relative group hover:border-emerald-500/20 transition-all duration-300"
                        >
                            <Quote className="text-emerald-500/20 absolute top-8 right-8" size={48} />

                            <p className="text-slate-300 text-lg mb-8 leading-relaxed relative z-10">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{item.author}</h4>
                                    <p className="text-emerald-400 text-xs font-medium">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
