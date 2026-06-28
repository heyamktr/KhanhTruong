import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#0c0c0c", overflowX: "clip" }}>
      <StickyNav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Contact />
    </main>
  );
}
