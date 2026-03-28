"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  end: number | string;
  duration?: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  duration = 1.5,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const numericEnd = typeof end === "number" ? end : parseInt(end, 10);
    const increment = numericEnd / (duration * 60);
    let animationFrameId: number;

    const animate = () => {
      start += increment;
      if (start < numericEnd) {
        setCount(Math.floor(start));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const Numbers: React.FC = () => {
  const stats = [
    { value: 16, suffix: "", label: "Age" },
    { value: 15, suffix: "", label: "Research Phases" },
    { value: 23, suffix: "", label: "Repositories on GitHub" },
    { value: 1, suffix: "", label: "DOI-Backed Preprint" },
    { value: 97, suffix: "%", label: "Peak Model Accuracy" },
    { value: 7, suffix: "", label: "Projects Deployed" },
  ];

  return (
    <section className="min-h-screen bg-primary py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xl lg:text-2xl text-accent-primary mb-4">
            "The work doesn't lie."
          </p>
          <p className="font-body text-text-secondary">
            Every number below is a real output. Not a claim.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "backOut" }}
              className="text-center"
            >
              <div className="font-display text-6xl lg:text-8xl font-bold text-accent-primary mb-4">
                <AnimatedNumber
                  end={stat.value}
                  duration={1.5}
                  suffix={stat.suffix}
                />
              </div>
              <div className="font-mono text-sm md:text-base text-text-dim uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
