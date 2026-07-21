import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#0c0c0c", overflowX: "clip" }}>
      <StickyNav />
      <Hero />
      <Marquee />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Certifications />
      <Contact />
    </main>
  );
}
