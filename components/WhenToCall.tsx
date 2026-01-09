"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, HelpCircle } from "lucide-react";

interface WhenToCallProps {
    content: any;
}

const icons = [
    <AlertCircle className="text-rose-400" size={24} />,
    <AlertCircle className="text-orange-400" size={24} />,
    <HelpCircle className="text-yellow-400" size={24} />,
    <AlertCircle className="text-red-400" size={24} />,
    <HelpCircle className="text-rose-400" size={24} />
];

export default function WhenToCall({ content }: WhenToCallProps) {
    const { badge, title_start, title_highlight, subtitle, cta, footer_text_start, footer_text_highlight, footer_text_end, cards } = content;

    return (
        <section id="id_when_to_call" className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -mt-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        {badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {title_start} <span className="text-blue-600">{title_highlight}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                    {cards.map((item: any, index: number) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-300 hover:bg-white transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shadow-sm hover:shadow-lg hover:shadow-blue-900/5"
                        >
                            <div className="bg-white p-3 rounded-full border border-slate-200 shrink-0 shadow-sm">
                                {icons[index % icons.length]}
                            </div>
                            <span className="text-slate-800 font-medium text-lg leading-snug">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 flex flex-col items-center gap-4"
                >
                    <p className="text-slate-600 text-lg">
                        {footer_text_start} <span className="text-slate-900 font-bold">{footer_text_highlight}</span>{footer_text_end}
                    </p>
                    <a
                        href="#id_contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        {cta} <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
