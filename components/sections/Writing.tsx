"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { constants } from "@/lib/constants";

const Writing: React.FC = () => {
  return (
    <section id="writing" className="min-h-screen bg-primary py-24 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Thinking Out Loud
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Research notes, half-formed ideas, and questions I can't stop asking.
            On Substack.
          </p>
        </motion.div>

        {/* Substack Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

          <div className="relative bg-bg-card border border-border rounded-2xl p-12 text-center overflow-hidden">
            {/* Aurora background */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.2),transparent_50%)]"
                style={{ animation: "aurora 8s ease-in-out infinite" }}
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.2),transparent_50%)]"
                style={{ animation: "aurora 8s ease-in-out infinite 2s" }}
              />
            </div>

            <div className="relative z-10">
              {/* Substack logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-primary/10 mb-6"
              >
                <svg
                  className="w-8 h-8 text-accent-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.539 6.082c-.196-.979-.95-1.695-1.856-1.794-.386-.042-.752-.103-1.095-.192l-2.912.641a.373.373 0 0 0-.297.016c-.105 0-.23-.028-.367-.09l-2.455-1.317a.333.333 0 0 0-.273-.107c-.112 0-.217.037-.293.105l-1.792 2.093c-.033.042-.073.088-.115.141l-.015.02a.37.37 0 0 0-.147.296c0 .042.004.084.018.12l2.362 1.191c.042.021.088.021.131.021.183 0 .354-.067.499-.2.209-.185.287-.494.215-.81a1.973 1.973 0 0 0-.396-.722l.792-2.1a2.191 2.191 0 0 0 .619-.908c.183-.301.431-.493.725-.566a1.867 1.867 0 0 1 .447-.071l2.726.413a.409.409 0 0 1 .282.736z" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4"
              >
                Muhammad Rayan Shahid on Substack
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="font-body text-text-secondary text-lg mb-8 max-w-xl mx-auto leading-relaxed"
              >
                Independent researcher working on human-centered AI and
                cognitive measurement. Interested in how understanding,
                confidence, and stability can be formally measured — not assumed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href={constants.social.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-primary text-black font-display font-semibold hover:bg-accent-primary/90 transition-colors duration-300"
                >
                  <span>Read My Writing</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-secondary/5 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Add aurora animation to global styles */}
      <style jsx>{`
        @keyframes aurora {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};

export default Writing;
