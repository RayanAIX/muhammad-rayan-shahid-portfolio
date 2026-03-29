"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const StorytellingScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300vh",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      // Animate background gradient
      const bgColors = [
        { r: 3, g: 3, b: 3 }, // dim
        { r: 10, g: 10, b: 15 },
        { r: 3, g: 3, b: 3 },
        { r: 17, g: 17, b: 30 },
        { r: 3, g: 3, b: 3 },
      ];

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300vh",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * (bgColors.length - 1));
          const nextIndex = Math.min(index + 1, bgColors.length - 1);
          const localProgress = (progress * (bgColors.length - 1)) % 1;

          const r = gsap.utils.interpolate(
            bgColors[index].r,
            bgColors[nextIndex].r,
            localProgress
          );
          const g = gsap.utils.interpolate(
            bgColors[index].g,
            bgColors[nextIndex].g,
            localProgress
          );
          const b = gsap.utils.interpolate(
            bgColors[index].b,
            bgColors[nextIndex].b,
            localProgress
          );

          document.documentElement.style.setProperty(
            "--bg-primary",
            `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
          );
        },
      });

      // Animate chapters
      const chapters = gsap.utils.toArray(".chapter");

      chapters.forEach((chapter, i) => {
        gsap.fromTo(
          chapter as HTMLElement,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: chapter as Element,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const chapters = [
    {
      text: "It started with a question no textbook thought to ask.",
      sub: "Karachi, 2024",
    },
    {
      text: "Why do students fail even when they study? Why does knowing the answer ≠ understanding it?",
      sub: "",
    },
    {
      text: "hypothesis = 'correctness_score != understanding_level'",
      sub: "result = 'cognitive_stability_matters_more'",
      code: true,
    },
    {
      text: "15",
      sub: "15 research phases later, HCMS was born. A DOI-backed preprint. A formal framework. At 16.",
      count: true,
    },
    {
      text: "I don't build AI to follow a roadmap.",
      sub: "I build it because the problem is real and someone has to go first.",
    },
  ];

  return (
    <section
      ref={(el) => {
        containerRef.current = el as HTMLDivElement;
        ref(el);
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-text-primary"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      {/* Chapters */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="chapter min-h-[60vh] flex flex-col items-center justify-center text-center mb-32"
          >
            {/* Code chapter with syntax highlighting */}
            {index === 2 ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-mono text-base md:text-lg mb-3 bg-secondary/30 px-6 py-4 rounded-lg border border-border"
                >
                  <span className="text-gray-400"># The hypothesis that changed everything</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="font-mono text-base md:text-lg mb-2"
                >
                  <span style={{ color: "#8b5cf6" }}>correctness_score</span>: float = student.{' '}
                  <span style={{ color: "#00d4ff" }}>get_answer</span>()
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="font-mono text-base md:text-lg mb-2"
                >
                  <span style={{ color: "#8b5cf6" }}>understanding_level</span>: float = hcms.{' '}
                  <span style={{ color: "#00d4ff" }}>measure</span>(student)
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="font-mono text-base md:text-lg"
                >
                  <span style={{ color: "#8b5cf6" }}>assert</span> correctness_score != understanding_level{' '}
                  <span className="text-gray-500"># ← always true</span>
                  <br />
                  <span className="text-gray-400"># The gap between these two values is what I research.</span>
                </motion.div>
              </>
            ) : chapter.count ? (
              <>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="font-display text-[8rem] md:text-[12rem] font-bold text-accent-primary/80 mb-8 glow-text"
                >
                  {chapter.text}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl"
                >
                  {chapter.sub}
                </motion.p>
              </>
            ) : (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
                >
                  {chapter.text}
                </motion.h2>
                {chapter.sub && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index === 4 ? 1.2 : 0.5, // longer delay for final chapter
                      duration: 0.8
                    }}
                    className={`font-mono text-base md:text-lg ${index === 4 ? 'font-bold text-accent-primary' : 'text-accent-primary/80'}`}
                  >
                    {chapter.sub}
                  </motion.p>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-32 w-px bg-border/50 overflow-hidden">
        <motion.div
          className="h-full w-full bg-accent-primary"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ root: containerRef }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default StorytellingScroll;
