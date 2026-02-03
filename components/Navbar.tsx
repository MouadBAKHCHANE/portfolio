"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Linkedin, User, Globe } from "lucide-react";
import { cn } from "@/lib/utils";


interface NavbarProps {
    content: any;
    lang: "en" | "fr";
}

export default function Navbar({ content, lang }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { links, cta, role } = content;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLang = () => {
        // Simple client-side redirect for now
        if (lang === "en") window.location.href = "/fr";
        else window.location.href = "/";
    };

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
            <div
                className={cn(
                    "w-full max-w-6xl rounded-full transition-all duration-300 border border-slate-200/50 bg-white/70 backdrop-blur-md shadow-lg shadow-slate-200/50 px-6 py-3 flex justify-between items-center",
                    scrolled ? "bg-white/90 shadow-xl" : "bg-white/70"
                )}
            >
                {/* Left: Identity */}
                <Link href={lang === "fr" ? "/fr" : "/"} className="flex items-center gap-3 decoration-transparent group">
                    <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden relative shadow-sm">
                        <Image
                            src="/avatar.png"
                            alt="Mouad Bakhchane"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-sm leading-none group-hover:text-blue-600 transition-colors">Mouad Bakhchane</span>
                        <span className="text-[10px] text-blue-600 uppercase tracking-wider font-medium mt-1">{role}</span>
                    </div>
                </Link>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link: any) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button onClick={toggleLang} className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 font-medium text-xs uppercase border border-slate-200 rounded-full px-2 py-1 hover:border-slate-300">
                        <Globe size={14} /> {lang === "en" ? "FR" : "EN"}
                    </button>
                    <Link href="https://linkedin.com" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="#id_contact"
                        className="pl-1 pr-5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all flex items-center gap-3 hover:scale-105 shadow-md shadow-blue-500/20"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                        </div>
                        <span className="text-sm">{cta}</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-slate-700 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div
                    className="absolute top-20 left-4 right-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl lg:hidden"
                >
                    <div className="flex flex-col gap-2">
                        <button onClick={toggleLang} className="self-end text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 font-medium text-sm border border-slate-200 rounded-full px-3 py-1 mb-2">
                            <Globe size={16} /> Switch to {lang === "en" ? "French" : "English"}
                        </button>
                        {links.map((link: any) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px bg-slate-100 my-2"></div>
                        <Link
                            href="#id_contact"
                            onClick={() => setIsOpen(false)}
                            className="p-3 rounded-lg bg-blue-600 text-white font-bold text-center"
                        >
                            {cta}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
