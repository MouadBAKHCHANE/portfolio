"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Code2 } from "lucide-react";

interface ExpertiseProps {
    content: any;
}

const icons = [
    { icon: <BarChart3 size={24} />, bg: "bg-blue-500/10", text: "text-blue-500" },
    { icon: <Database size={24} />, bg: "bg-orange-500/10", text: "text-orange-500" },
    { icon: <Code2 size={24} />, bg: "bg-rose-500/10", text: "text-rose-500" }
];

export default function Expertise({ content }: ExpertiseProps) {
    const { badge, items, side_title, side_para1, side_para2, side_para3, stats } = content;

    return (
        <section id="id_expertise" className="py-24 bg-slate-950 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Services List */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-12"
                        >
                            {badge}
                        </motion.div>

                        <div className="space-y-6">
                            {items.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-900 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="flex gap-6 items-start">
                                        <div className={`w-12 h-12 rounded-full ${icons[index % icons.length].bg} flex items-center justify-center shrink-0 ${icons[index % icons.length].text}`}>
                                            {icons[index % icons.length].icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Text & Stats */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-8"
                        >
                            {side_title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-slate-300 text-lg leading-relaxed mb-12"
                        >
                            <p>{side_para1}</p>
                            <p>{side_para2}</p>
                            <p>{side_para3}</p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {stats && stats.map((stat: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl"
                                >
                                    <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-400 text-sm font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
