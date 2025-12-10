"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Churn Prediction",
        category: "Machine Learning",
        description: "Identify customers likely to leave and retain them proactively. Built a binary classification model to predict churn risk and enable proactive retention strategies.",
        tags: ["Python", "Pandas", "XGBoost", "SHAP", "Power BI"],
        color: "from-rose-500/20 to-orange-500/20",
        links: { demo: "#", code: "https://github.com/MouadBAKHCHANE" }
    },
    {
        title: "Dynamic Pricing",
        category: "Optimization",
        description: "Adjust prices based on demand, time, or competitor data. Implemented regression and optimization models to maximize revenue dynamically.",
        tags: ["Python", "Prophet", "APIs", "Dash", "Streamlit"],
        color: "from-amber-500/20 to-yellow-500/20",
        links: { demo: "#", code: "https://github.com/MouadBAKHCHANE" }
    },
    {
        title: "Demand Forecasting",
        category: "Time Series",
        description: "Predict future product demand to manage inventory. Built forecasting models using ARIMA and LSTM to optimize stock levels and reduce waste.",
        tags: ["Python", "Prophet", "Power BI", "Excel", "SQL"],
        color: "from-emerald-500/20 to-teal-500/20",
        links: { demo: "#", code: "https://github.com/MouadBAKHCHANE" }
    },
    {
        title: "Recommendation System",
        category: "Collaborative Filtering",
        description: "Suggest products/content to increase engagement or purchases. Implemented collaborative filtering and ML-based recommendations using graph databases.",
        tags: ["Python", "LightFM", "TensorFlow", "Neo4j"],
        color: "from-cyan-500/20 to-blue-500/20",
        links: { demo: "#", code: "https://github.com/MouadBAKHCHANE" }
    },
    {
        title: "Marketing Response",
        category: "Classification",
        description: "Predict customer likelihood to respond to campaigns. Built classification models to optimize targeting and improve marketing ROI.",
        tags: ["Python", "Scikit-learn", "SQL", "Power BI", "SHAP"],
        color: "from-violet-500/20 to-purple-500/20",
        links: { demo: "#", code: "https://github.com/MouadBAKHCHANE" }
    }
];

export default function Projects() {
    return (
        <section id="id_projects" className="py-24 bg-slate-950 text-white">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                        Portfolio
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">Real-World <span className="text-emerald-400">Use Cases</span></h3>
                    <p className="text-slate-400 max-w-2xl">
                        See how I apply data engineering and machine learning to solve actual business problems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20 flex flex-col"
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.color} relative p-6 flex flex-col justify-end`}>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="relative z-10 p-3 bg-slate-950/30 backdrop-blur-md rounded-xl border border-white/10 w-fit">
                                    <FolderGit2 className="text-emerald-400" size={24} />
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-emerald-400 text-sm font-medium mb-2 tracking-wide">
                                    {project.category}
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">{project.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-xs text-slate-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={project.links.code} className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all">
                                    View Project <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
