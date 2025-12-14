"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Workflow, Terminal, CheckCircle2 } from "lucide-react";

interface ExpertiseProps {
    content: any;
}

const icons = [
    <BarChart3 className="text-emerald-400" size={32} />,
    <Database className="text-teal-400" size={32} />,
    <Terminal className="text-cyan-400" size={32} />
];

export default function Expertise({ content }: ExpertiseProps) {
    const { badge, title_start, title_highlight, items } = content;

    return (
        <section id="id_expertise" className="py-24 bg-slate-900 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4"
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

                <div className="grid lg:grid-cols-3 gap-8">
                    {items.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {icons[index % icons.length]}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-slate-400 mb-8 h-12">
                                {item.description}
                            </p>

                            <ul className="space-y-4">
                                {item.points.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={16} />
                                        <span className="text-slate-300 text-sm">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
