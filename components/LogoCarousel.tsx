"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-poppins",
});

const logos = [
    { name: "Innovu Studio", src: "/logos/innovu.png", isImage: true },
    { name: "Sand Technologies", src: "/logos/sand.png", isImage: true },
    { name: "CFG Bank", src: "/logos/cfgbank.png", isImage: true },
    { name: "Reserva", src: "/logos/reserva.png", isImage: true },
    { name: "Seedsvision", src: "", isImage: false }, // Text based
];

export default function LogoCarousel() {
    return (
        <section className="py-2 bg-transparent border-t border-slate-200/50 overflow-hidden mt-2">
            <div className="w-full px-0 lg:px-0 mb-4">
                <p className="text-center lg:text-left text-slate-900 text-xs font-bold tracking-tight">
                    Trusted By
                </p>
            </div>

            <div className="flex relative items-center">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="mx-6 md:mx-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                            {logo.isImage ? (
                                <div className="relative h-8 w-20 md:h-9 md:w-24">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className={`${poppins.className} text-lg md:text-xl font-semibold text-slate-800`}>
                                    {logo.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Gradient Masks */}

            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
