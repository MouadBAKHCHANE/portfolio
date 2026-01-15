"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
    content: any;
}

export default function Projects({ content }: ProjectsProps) {
    const { badge, title_start, title_highlight, subtitle, view_project, items } = content;

    return (
        <section id="id_projects" className="py-24 bg-slate-50 text-slate-900 border-y border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                        {badge}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">{title_start} <span className="text-blue-600">{title_highlight}</span></h3>
                    <p className="text-slate-600 max-w-2xl">
                        {subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {items.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 flex flex-col"
                        >
                            <div className="h-64 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </>
                                ) : (
                                    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-50 relative p-6 flex flex-col justify-end">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-multiply"></div>
                                        <div className="relative z-10 p-3 bg-white/60 backdrop-blur-md rounded-xl border border-white/40 w-fit">
                                            <FolderGit2 className="text-blue-500" size={24} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-blue-600 text-sm font-bold tracking-wide">{project.category}</span>
                                    {project.sector && (
                                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                                            {project.sector}
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack?.map((tech: string, i: number) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <div className="flex-1 flex flex-col gap-2">
                                        {project.demoLinks ? (
                                            project.demoLinks.map((link: any, idx: number) => (
                                                <Link key={idx} href={link.url} target="_blank" className="w-full py-2 rounded-xl bg-blue-600 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-md shadow-blue-500/20">
                                                    <ExternalLink size={16} /> {link.label}
                                                </Link>
                                            ))
                                        ) : project.demoLink ? (
                                            <Link href={project.demoLink} target="_blank" className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                                                <ExternalLink size={18} /> Demo
                                            </Link>
                                        ) : (
                                            <Link href="#" className="w-full py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                                                {view_project} <ArrowUpRight size={18} />
                                            </Link>
                                        )}
                                    </div>

                                    {project.githubLink && (
                                        <Link href={project.githubLink} target="_blank" className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center">
                                            <Github size={20} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
