"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, GraduationCap, Database } from "lucide-react";

const certifications = [
    { name: "Masters in Finance", issuer: "ENCG", icon: <GraduationCap size={16} /> },
    { name: "AI Data Science", issuer: "ALX & Mastercard", icon: <Award size={16} /> },
];

const techStack = [
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "SQL", src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Google Colab", src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
    { name: "Microsoft Fabric", src: "/logos/fabric.png" },
    { name: "Microsoft Excel", src: "/logos/excel.png" },
    { name: "Google Sheets", src: "/logos/sheets.png" },
    { name: "Machine Learning", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
];

export default function About() {
    return (
        <section id="id_about" className="py-24 bg-slate-900 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-3">About Me</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Finance at Heart, <br /> Data in Action
                        </h3>
                        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                            I am a <strong>Business Data Analyst</strong> with a deep background in Finance and Accounting. Unlike generalist data scientists, I understand the P&L, the Balance Sheet, and the business logic behind the numbers.
                        </p>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            With experience at <strong>Innovu Studio</strong> and <strong>Bakco Import</strong>, I have successfully optimized assets using Modern Portfolio Theory and reduced operational costs through improved data visibility.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">5+ Years Experience</h4>
                                    <p className="text-slate-500 text-sm">Working with Financial Data & Market Analysis</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Certified Expert</h4>
                                    <p className="text-slate-500 text-sm">Masters in Finance & AI Data Science Certified</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://www.linkedin.com/in/mouad-bakhchane/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-colors group"
                            >
                                <div className="w-6 h-6 relative">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-[#0077b5] font-bold">Connect on LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Skill/Cert Grid (Simulating the badges from reference) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-slate-950/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                <Database size={20} className="text-emerald-400" /> Technical Arsenal
                            </h4>

                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {techStack.map((tech, i) => (
                                    <div key={tech.name} className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors aspect-square">
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 relative mb-1 sm:mb-2">
                                            <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-slate-400 font-medium text-[8px] sm:text-[10px] text-center leading-tight">{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                <GraduationCap size={20} className="text-teal-400" /> Education & Certs
                            </h4>

                            <div className="space-y-3">
                                {certifications.map((cert, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/5">
                                        <div className="text-emerald-400">{cert.icon}</div>
                                        <div>
                                            <div className="text-white font-semibold text-sm">{cert.name}</div>
                                            <div className="text-slate-500 text-xs">{cert.issuer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
