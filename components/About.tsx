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
    const { badge, title_start, title_highlight, bio_p1, bring_table_title, points, tech_arsenal, tech_text, certifications: certsTitle, certs } = content;

    const stackIcons = [
        { name: "SQL", src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
        { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Docker", src: "https://www.svgrepo.com/show/331370/docker.svg" },
        { name: "FastAPI", src: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
        { name: "Streamlit", src: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
        { name: "Colab", src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
        { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Azure", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" }
    ];

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
                        <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                            {bio_p1}
                        </p>

                        <h4 className="text-xl font-bold text-slate-900 mb-6">{bring_table_title}</h4>
                        <div className="space-y-6">
                            {points?.map((point: any, index: number) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 text-lg">{point.title}</h5>
                                        <p className="text-slate-600 leading-relaxed">{point.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Education & Certs (Moved Stack out) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 relative overflow-hidden shadow-sm h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                            {/* Education */}
                            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                <GraduationCap size={20} className="text-teal-600" /> {content.education_title}
                            </h4>

                            <div className="space-y-3 mb-8">
                                {content.education?.map((edu: any, i: number) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                        <div className="text-teal-600"><GraduationCap size={16} /></div>
                                        <div>
                                            <div className="text-slate-900 font-semibold text-sm">{edu.degree}</div>
                                            <div className="text-slate-500 text-xs">{edu.school} • {edu.year}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                <Award size={20} className="text-orange-500" /> {certsTitle}
                            </h4>

                            <div className="space-y-3">
                                {certs.map((cert: any, i: number) => (
                                    <a
                                        key={i}
                                        href={cert.link || "#"}
                                        target={cert.link ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-all ${cert.link ? "hover:border-blue-400 hover:shadow-md cursor-pointer group" : ""}`}
                                    >
                                        <div className="text-blue-600 group-hover:scale-110 transition-transform"><Award size={16} /></div>
                                        <div>
                                            <div className="text-slate-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">{cert.name}</div>
                                            <div className="text-slate-500 text-xs">{cert.issuer}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: The Stack (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 opacity-20"></div>

                        <h4 className="text-slate-900 font-bold mb-8 flex items-center justify-center gap-2 text-xl">
                            <Database size={24} className="text-blue-600" /> {tech_arsenal}
                        </h4>

                        <div className="grid grid-cols-3 md:grid-cols-9 gap-6">
                            {stackIcons.map((tech, i) => (
                                <div key={tech.name} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all group cursor-default">
                                    <div className="w-12 h-12 relative mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 text-center leading-tight uppercase tracking-wide group-hover:text-blue-600 transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
