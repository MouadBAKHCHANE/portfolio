import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
