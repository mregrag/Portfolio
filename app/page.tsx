import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InfoCards from "@/components/InfoCards";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

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
