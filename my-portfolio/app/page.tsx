import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Tools from "@/components/home/Tools";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import FloatingShapes from "@/components/home/FloatingShapes";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden">
      <FloatingShapes />

      <section id="hero" className="section">
        <Hero />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="tools" className="section">
        <Tools />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </main>
  );
}
