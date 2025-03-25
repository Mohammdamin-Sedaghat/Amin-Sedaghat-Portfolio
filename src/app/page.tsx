'use client'
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RandomFunFacts from "@/components/RandomFunFacts";
import Skills from "@/components/Skills";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 100);

    return () => clearTimeout(timer);
  },[])

  if (!loadingDone) return <Loading />;
  
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
