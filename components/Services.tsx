"use client";

import { Database, LineChart, Brain, BarChart4, PieChart, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Database className="w-8 h-8 text-emerald-400" />,
        title: "Data Engineering & ETL",
        description: "Building reliable 'Single Source of Truth' pipelines using dbt, SQL, and Fivetran. Automated and error-free.",
    },
    {
        icon: <Brain className="w-8 h-8 text-teal-400" />,
        title: "Predictive Analytics",
        description: "Forecasting churn, LTV, and sales using Python and Machine Learning models (Logistic Regression, Random Forest).",
    },
    {
        icon: <BarChart4 className="w-8 h-8 text-emerald-500" />,
        title: "BI Intelligence",
        description: "Interactive Power BI & Tableau dashboards that track KPIs like Gross Margin, ROAS, and Cash Flow in real-time.",
    },
    {
        icon: <PieChart className="w-8 h-8 text-cyan-400" />,
        title: "Financial Analysis",
        description: "Deep dive into financial markets, equity analysis, and portfolio optimization strategies.",
    },
    {
        icon: <LineChart className="w-8 h-8 text-green-300" />,
        title: "Process Automation",
        description: "Replacing manual Excel reporting with automated engines that save 15+ hours/month.",
    },
    {
        icon: <Layers className="w-8 h-8 text-teal-300" />,
        title: "Consulting",
        description: "Strategic advice on data architecture and helping SMEs transition to data-driven decision making.",
    },
];

export default function Services() {
    return (
        <section id="id_services" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Mesh/Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-3">My Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">High-Impact Data Services</h3>
                    <p className="text-slate-400 text-lg">
                        Bridging the gap between complex raw data and actionable business strategy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 inline-block group-hover:bg-emerald-500/10 transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
