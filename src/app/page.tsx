import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
