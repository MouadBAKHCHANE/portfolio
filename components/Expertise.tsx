"use client";

import { motion } from "framer-motion";
import { AreaChart, PieChart, BrainCircuit } from "lucide-react";

interface ExpertiseProps {
    content: any;
}

const icons = [
    { icon: <AreaChart size={24} />, bg: "bg-blue-500/10", text: "text-blue-500" },      // Analytics
    { icon: <PieChart size={24} />, bg: "bg-orange-500/10", text: "text-orange-500" },   // Viz
    { icon: <BrainCircuit size={24} />, bg: "bg-rose-500/10", text: "text-rose-500" }    // AI
];

export default function Expertise({ content }: ExpertiseProps) {
    const { badge, items, side_title, side_para1, side_para2, side_para3, stats } = content;

    return (
        <section id="id_expertise" className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Services List */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-12"
                        >
                            {badge}
                        </motion.div>

                        <div className="space-y-6">
                            {items.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex gap-6 items-start">
                                        <div className={`w-14 h-14 rounded-full ${icons[index % icons.length].bg} flex items-center justify-center shrink-0 ${icons[index % icons.length].text}`}>
                                            {icons[index % icons.length].icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                            <p className="text-slate-600 text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Text & Stats */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
                        >
                            {side_title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12"
                        >
                            <p>{side_para1}</p>
                            <p>{side_para2}</p>
                            <p>{side_para3}</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {stats && stats.map((stat: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="bg-white border border-slate-100 p-6 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center md:aspect-square text-center"
                                >
                                    <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                                        {stat.value}<span className="text-blue-600">{!isNaN(Number(stat.value)) && "+"}</span>
                                    </div>
                                    <div className="text-slate-500 text-sm font-medium">
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
