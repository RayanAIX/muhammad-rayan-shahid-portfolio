"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          style={{
            boxShadow: `0 0 60px ${project.accentColor}22`,
          }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-bg-card border-b border-border p-6 flex justify-between items-start z-10">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                style={{
                  backgroundColor: `${project.accentColor}15`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                {project.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-accent-primary transition-colors p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Description */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                Overview
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Architecture (if provided) */}
            {project.architecture && (
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                  Architecture
                </h3>
                <div className="bg-secondary/30 border border-border rounded-xl p-6">
                  <pre className="font-mono text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                    {project.architecture}
                  </pre>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-text-secondary font-mono text-sm hover:border-accent-primary/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {project.accuracy && (
                <div className="bg-secondary/30 border border-border rounded-xl p-4">
                  <div className="font-mono text-2xl font-bold text-accent-primary">
                    {project.accuracy}
                  </div>
                  <div className="font-mono text-xs text-text-dim uppercase">
                    Model Accuracy
                  </div>
                </div>
              )}
              <div className="bg-secondary/30 border border-border rounded-xl p-4">
                <div className="font-mono text-2xl font-bold" style={{ color: project.accentColor }}>
                  {project.status.split(" ")[0]}
                </div>
                <div className="font-mono text-xs text-text-dim uppercase">
                  Status
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.943 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub Repository
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
