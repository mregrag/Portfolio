import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import InfoCards from "@/components/sections/InfoCards";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

export default function Home() {
    return (
        <main className="bg-[#0b0b0b] text-white min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Skills />
            <Projects />
            <Contact />
            <InfoCards />
            <Footer />
        </main>
    );
}
