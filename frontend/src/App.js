import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import EditorialMarquee from "@/components/sections/EditorialMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import PastWork from "@/components/sections/PastWork";
import CaseStudies from "@/components/sections/CaseStudies";
import Manifesto from "@/components/sections/Manifesto";
import SideProjects from "@/components/sections/SideProjects";
import Contact from "@/components/sections/Contact";

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App relative bg-ink font-body text-white">
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <About />
        <Skills />
        <PastWork />
        <CaseStudies />
        <Manifesto />
        <SideProjects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
