"use client";

import { motion } from "framer-motion";
import {
    GitBranch,
    Database,
    Activity,
    Box,
    Rocket,
    LineChart,
    Zap,
    TrendingUp,
    Users,
    AlertTriangle,
    Layers,
    Repeat
} from "lucide-react";

interface MLOpsProps {
    content: any;
}

export default function MLOps({ content }: MLOpsProps) {
    const { badge, title_start, title_highlight, description, pillars_title, pillars, use_cases_title, use_cases, policy } = content;

    const pillarIcons = [
        <Layers key="1" size={24} className="text-blue-400" />,      // Clean Structure
        <GitBranch key="2" size={24} className="text-orange-400" />, // Version Control
        <Activity key="3" size={24} className="text-purple-400" />,  // Experiment Tracking
        <Box key="4" size={24} className="text-emerald-400" />,      // Reproducible Env
        <Rocket key="5" size={24} className="text-red-400" />,       // Deployment
        <LineChart key="6" size={24} className="text-yellow-400" />, // Monitoring
        <Repeat key="7" size={24} className="text-cyan-400" />       // Automated Pipelines
    ];

    const useCaseIcons = [
        <TrendingUp key="uc1" size={32} className="text-blue-500" />,
        <Users key="uc2" size={32} className="text-purple-500" />,
        <AlertTriangle key="uc3" size={32} className="text-orange-500" />
    ];

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Dark Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
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
                        {title_start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{title_highlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Use Cases Grid */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-10 text-center">{use_cases_title}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {use_cases.map((uc: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
                            >
                                <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-700 shadow-lg">
                                    {useCaseIcons[idx]}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{uc.title}</h4>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {uc.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* MLOps Blueprint Pills */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-10 text-center">{pillars_title}</h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                        {pillars.map((pillar: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-3 bg-slate-900 border border-slate-700 px-5 py-3 rounded-full hover:border-blue-500/50 transition-colors"
                            >
                                {pillarIcons[idx]}
                                <div>
                                    <p className="text-white font-bold text-sm">{pillar.title}</p>
                                    <p className="text-slate-500 text-xs hidden sm:block">{pillar.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Zero Waste Policy Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-8 text-center backdrop-blur-sm"
                >
                    <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">{policy.title}</h4>
                    <p className="text-white text-lg font-medium italic">"{policy.text}"</p>
                </motion.div>

            </div>
        </section>
    );
}
