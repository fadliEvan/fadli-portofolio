import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientGlow from "@/components/AmbientGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-white selection:text-black">
      <AmbientGlow />
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}