import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RandomFunFacts from "@/components/RandomFunFacts";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <RandomFunFacts />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </>
  );
}
