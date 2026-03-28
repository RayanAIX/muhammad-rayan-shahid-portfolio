"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import { constants } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isHovering = useState(false)[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="card grain-overlay cursor-pointer perspective-1000 relative overflow-hidden group"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Category badge */}
        <div className="flex justify-between items-start mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{
              backgroundColor: `${project.accentColor}15`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            {project.category}
          </span>
          {project.status && (
            <span className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono text-text-dim border border-border/50">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-text-secondary mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs font-mono bg-secondary/50 text-text-dim"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 rounded text-xs font-mono bg-secondary/50 text-text-dim">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Accuracy or demo badge */}
        {project.accuracy && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono">
              {project.accuracy} Accuracy
            </span>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/50 text-accent-primary text-xs font-mono hover:bg-accent-primary/10 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub ↗
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/50 text-accent-primary text-xs font-mono hover:bg-accent-primary/10 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: `${project.accentColor}08` }}
      />
    </motion.div>
  );
};

export default ProjectCard;
