"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const sparklines = [
  // upward diagonal
  <polyline
    key="spark-0"
    points="0,24 20,16 40,20 60,12 80,0"
    fill="none"
    stroke="var(--accent-primary)"
    strokeWidth="2"
  />,
  // step function
  <polyline
    key="spark-1"
    points="0,20 20,20 20,12 40,12 40,8 60,8 60,4 80,4"
    fill="none"
    stroke="var(--accent-primary)"
    strokeWidth="2"
  />,
  // ascending bars (simulate with vertical lines)
  <g key="spark-2">
    <line x1="10" y1="24" x2="10" y2="12" stroke="var(--accent-primary)" strokeWidth="2" />
    <line x1="30" y1="24" x2="30" y2="6" stroke="var(--accent-primary)" strokeWidth="2" />
    <line x1="50" y1="24" x2="50" y2="10" stroke="var(--accent-primary)" strokeWidth="2" />
    <line x1="70" y1="24" x2="70" y2="2" stroke="var(--accent-primary)" strokeWidth="2" />
  </g>,
  // single peak spike
  <polyline
    key="spark-3"
    points="0,24 20,24 40,8 60,24 80,24"
    fill="none"
    stroke="var(--accent-primary)"
    strokeWidth="2"
  />,
  // near-flat high line
  <polyline
    key="spark-4"
    points="0,4 20,2 40,4 60,2 80,4"
    fill="none"
    stroke="var(--accent-primary)"
    strokeWidth="2"
  />,
  // gradual climb
  <polyline
    key="spark-5"
    points="0,20 20,18 40,14 60,10 80,6"
    fill="none"
    stroke="var(--accent-primary)"
    strokeWidth="2"
  />,
];

const Numbers: React.FC = () => {
  const stats = [
    {
      target: 16,
      suffix: "",
      label: "Age",
      sub: "Years old. Building what most wait decades to attempt.",
      accentColor: "var(--accent-primary)",
    },
    {
      target: 15,
      suffix: "",
      label: "Research Phases",
      sub: "In HCMS. Not iterations. Structured phases.",
      accentColor: "var(--accent-primary)",
    },
    {
      target: 23,
      suffix: "",
      label: "Repositories",
      sub: "On GitHub. Every one shipped.",
      accentColor: "var(--accent-primary)",
    },
    {
      target: 1,
      suffix: "",
      label: "Published Preprint",
      sub: "DOI-backed. Zenodo. At 16.",
      accentColor: "var(--accent-primary)",
    },
    {
      target: 97,
      suffix: "%",
      label: "Peak Accuracy",
      sub: "Fake News Detector. Real-world data.",
      accentColor: "#10b981",
    },
    {
      target: 7,
      suffix: "",
      label: "Deployed Systems",
      sub: "Real inference. Real users.",
      accentColor: "var(--accent-primary)",
    },
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
          <p className="font-mono text-2xl md:text-3xl font-bold text-accent-primary mb-4">
            Proof, not promises.
          </p>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every number below is a shipped output, a published result, or a real system.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              className="relative bg-secondary/20 border border-border rounded-xl p-6 hover:border-accent-primary/50 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 group"
              style={{
                borderLeft: `3px solid ${stat.accentColor}`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none tabular-nums"
                  style={{ color: stat.accentColor }}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2} />
                </div>
              </div>
              {/* Sparkline */}
              <div className="h-8 w-full mb-2 opacity-60">
                <svg viewBox="0 0 80 24" className="w-full h-full">
                  {sparklines[index]}
                </svg>
              </div>
              <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
