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

interface AboutProps {
    content: any;
}

export default function About({ content }: AboutProps) {
    const { badge, title_start, title_highlight, bio_p1, bio_p2, stats, tech_arsenal, certifications: certsTitle, certs } = content;

    return (
        <section id="id_about" className="py-24 bg-white border-y border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">{badge}</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            {title_start} <br /> {title_highlight}
                        </h3>
                        <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                            {bio_p1}
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {bio_p2}
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold">{stats[0].value}</h4>
                                    <p className="text-slate-500 text-sm">{stats[0].label}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold">{stats[1].value}</h4>
                                    <p className="text-slate-500 text-sm">{stats[1].label}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://www.linkedin.com/in/mouad-bakhchane/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0077b5] text-white hover:bg-[#006097] transition-colors group shadow-lg shadow-blue-500/20"
                            >
                                <div className="w-6 h-6 relative bg-white rounded-sm p-0.5">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-bold">Connect on LinkedIn</span>
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
                        <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 relative overflow-hidden shadow-sm">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                <Database size={20} className="text-blue-600" /> {tech_arsenal}
                            </h4>

                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {techStack.map((tech, i) => (
                                    <div key={tech.name} className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all aspect-square">
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 relative mb-1 sm:mb-2">
                                            <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-slate-600 font-medium text-[8px] sm:text-[10px] text-center leading-tight">{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                <GraduationCap size={20} className="text-teal-600" /> {certsTitle}
                            </h4>

                            <div className="space-y-3">
                                {certs.map((cert: string, i: number) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                        <div className="text-blue-600"><Award size={16} /></div>
                                        <div>
                                            <div className="text-slate-900 font-semibold text-sm">{cert}</div>
                                            <div className="text-slate-500 text-xs">Microsoft</div>
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
