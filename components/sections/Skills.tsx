"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const skillGroups = [
    {
      ring: 1,
      title: "Languages",
      skills: [
        { name: "Python", description: "Core research and ML" },
        { name: "TeX", description: "Academic publishing" },
        { name: "JavaScript", description: "Web deployment" },
      ],
      color: "#00d4ff",
    },
    {
      ring: 2,
      title: "ML/DL",
      skills: [
        { name: "TensorFlow", description: "Deep learning frameworks" },
        { name: "Keras", description: "Rapid prototyping" },
        { name: "PyTorch", description: "Research-grade ML" },
        { name: "Scikit-learn", description: "Classical ML" },
      ],
      color: "#7c3aed",
    },
    {
      ring: 3,
      title: "NLP",
      skills: [
        { name: "NLTK", description: "Text processing" },
        { name: "TF-IDF", description: "Feature extraction" },
        { name: "Whisper", description: "Speech recognition" },
        { name: "GPT API", description: "LLM integration" },
      ],
      color: "#f59e0b",
    },
    {
      ring: 4,
      title: "Deploy",
      skills: [
        { name: "HuggingFace", description: "Model hosting" },
        { name: "Streamlit", description: "Rapid dashboards" },
        { name: "Gradio", description: "Interactive demos" },
        { name: "Vercel", description: "Production web apps" },
      ],
      color: "#10b981",
    },
    {
      ring: 5,
      title: "Research",
      skills: [
        { name: "Zenodo", description: "Open access publishing" },
        { name: "LaTeX", description: "Technical writing" },
        { name: "Jupyter", description: "Exploratory analysis" },
        { name: "Pandas/NumPy", description: "Data manipulation" },
      ],
      color: "#ec4899",
    },
  ];

  const calculatePosition = (ring: number, index: number, total: number) => {
    const radius = ring * 80;
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const renderSkillsNetwork = () => {
    return (
      <svg viewBox="-250 -250 500 500" className="w-full h-auto max-w-2xl mx-auto">
        {/* Center node */}
        <motion.circle
          cx="0"
          cy="0"
          r="30"
          fill="var(--accent-primary)"
          filter="url(#glowCenter)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="black"
          fontFamily="Syne, sans-serif"
          fontSize="16"
          fontWeight="700"
          style={{ pointerEvents: "none" }}
        >
          Rayan
        </text>

        {/* Connections from center */}
        {skillGroups.map((group, groupIdx) => {
          const angle = (groupIdx / skillGroups.length) * Math.PI * 2 - Math.PI / 2;
          const innerX = Math.cos(angle) * 50;
          const innerY = Math.sin(angle) * 50;
          const outerX = Math.cos(angle) * (50 + group.ring * 80);
          const outerY = Math.sin(angle) * (50 + group.ring * 80);

          return (
            <line
              key={`line-${group.ring}`}
              x1={innerX}
              y1={innerY}
              x2={outerX}
              y2={outerY}
              stroke={group.color}
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}

        {/* Skill groups */}
        {skillGroups.map((group) => {
          const baseAngle =
            (skillGroups.indexOf(group) / skillGroups.length) * Math.PI * 2 -
            Math.PI / 2;

          return (
            <g key={group.ring}>
              {group.skills.map((skill, index) => {
                const total = group.skills.length;
                const angle = baseAngle + (index / total) * (Math.PI * 2 / 3); // arc span
                const radius = group.ring * 80;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.g
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + group.ring * 0.2 }}
                    onMouseEnter={() => setHoveredNode(skill.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Connection line to parent */}
                    <line
                      x1={x * 0.7}
                      y1={y * 0.7}
                      x2={x}
                      y2={y}
                      stroke={group.color}
                      strokeWidth="1"
                      opacity="0.5"
                    />

                    {/* Node */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill={group.color}
                      whileHover={{ r: 12 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Label */}
                    <motion.text
                      x={x}
                      y={y + 25}
                      textAnchor="middle"
                      fill="var(--text-secondary)"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {skill.name}
                    </motion.text>
                  </motion.g>
                );
              })}
            </g>
          );
        })}

        {/* Glow filter definitions */}
        <defs>
          <filter id="glowCenter">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    );
  };

  return (
    <section id="skills" className="min-h-screen bg-primary py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What I build with.
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Every tool below has been used in a real shipped system or published research.
          </p>
        </motion.div>

        {/* Interactive Network */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          {renderSkillsNetwork()}
        </motion.div>

        {/* Hover info */}
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="font-mono text-accent-primary">{hoveredNode}</p>
          </motion.div>
        )}

        {/* Fallback: Tag cloud for mobile/small screens */}
        <div className="mt-16 text-center md:hidden">
          <p className="font-mono text-text-dim text-sm">
            View on larger screen for interactive network
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
