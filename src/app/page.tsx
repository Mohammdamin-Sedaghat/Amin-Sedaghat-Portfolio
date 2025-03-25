import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RandomFunFacts from "@/components/RandomFunFacts";
import Skills from "@/components/Skills";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Hero />
      <About />
      <RandomFunFacts />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </Suspense>
    </>
  );
}
