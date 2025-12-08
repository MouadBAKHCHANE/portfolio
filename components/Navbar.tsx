"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Linkedin, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Resume", href: "#id_about" },
    { name: "Case Studies", href: "#id_projects" },
    { name: "Resources", href: "#id_services" }, // Mapping Services to Resources to match ref text
    { name: "Contact", href: "#id_contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div
                className={cn(
                    "w-full max-w-6xl rounded-full transition-all duration-300 border border-white/5 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-emerald-900/20 px-6 py-3 flex justify-between items-center",
                    scrolled ? "bg-slate-900/90" : "bg-slate-900/80"
                )}
            >
                {/* Left: Identity */}
                <Link href="/" className="flex items-center gap-3 decoration-transparent group">
                    <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden relative">
                        <Image
                            src="/avatar.png"
                            alt="Mouad Bakhchane"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-white text-sm leading-none group-hover:text-emerald-400 transition-colors">Mouad Bakhchane</span>
                        <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium mt-1">Data & BI Consultant</span>
                    </div>
                </Link>

                {/* Center: Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white text-sm font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://linkedin.com" className="text-white hover:text-emerald-400 transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="#id_contact"
                        className="pl-1 pr-5 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-full font-bold transition-all flex items-center gap-3 hover:scale-105"
                    >
                        <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                            <User size={18} className="text-slate-900" />
                        </div>
                        <span className="text-sm">Let's Talk</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/5 my-2"></div>
                            <Link
                                href="#id_contact"
                                onClick={() => setIsOpen(false)}
                                className="p-3 rounded-lg bg-emerald-500 text-slate-900 font-bold text-center"
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
