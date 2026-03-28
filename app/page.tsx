"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import StorytellingScroll from "@/components/sections/StorytellingScroll";
import HCMS from "@/components/sections/HCMS";
import Terminal from "@/components/sections/Terminal";
import Projects from "@/components/sections/Projects";
import Numbers from "@/components/sections/Numbers";
import Skills from "@/components/sections/Skills";
import Writing from "@/components/sections/Writing";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // smoothTouch: false, // Not available in this Lenis version
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="lenis-lenis-wrapper">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Storytelling Scroll */}
        <StorytellingScroll />

        {/* Section 3: HCMS Research */}
        <HCMS />

        {/* Section 4: Terminal */}
        <Terminal />

        {/* Section 5: Projects */}
        <Projects />

        {/* Section 6: Numbers */}
        <Numbers />

        {/* Section 7: Skills */}
        <Skills />

        {/* Section 8: Writing */}
        <Writing />

        {/* Section 9: About */}
        <About />

        {/* Section 10: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
