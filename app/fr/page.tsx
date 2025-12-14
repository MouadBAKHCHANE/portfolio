import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhenToCall from "@/components/WhenToCall";
import Expertise from "@/components/Expertise";
import { content } from "@/lib/content";

import HowWeWork from "@/components/HowWeWork";

export default function HomeFR() {
    const t = content.fr;

    return (
        <main className="bg-slate-950 min-h-screen text-slate-200">
            <Navbar content={t.navbar} lang="fr" />
            <Hero content={t.hero} />
            <WhenToCall content={t.whenToCall} />
            <Expertise content={t.expertise} />
            <HowWeWork content={t.howWeWork} />
            <About content={t.about} />
            <Projects content={t.projects} />
            <Testimonials content={t.testimonials} />
            <Contact content={t.contact} />
        </main>
    );
}
