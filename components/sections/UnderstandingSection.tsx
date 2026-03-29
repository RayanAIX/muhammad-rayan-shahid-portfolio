"use client";

import React from "react";
import { motion } from "framer-motion";

const UnderstandingSection: React.FC = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            The Wrong Question
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Data ≠ Understanding",
              desc: "A model trained on 10 million examples doesn't understand any of them.",
            },
            {
              title: "Prediction ≠ Understanding",
              desc: "Getting the right answer doesn't mean knowing why it's right.",
            },
            {
              title: "Accuracy ≠ Understanding",
              desc: "97% accuracy can coexist with 0% cognitive stability.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col items-start p-6 rounded-xl border border-red-500/20 bg-red-500/5"
            >
              <span className="text-2xl mb-4">❌</span>
              <h3 className="font-display text-xl font-bold text-red-400 mb-2">
                {item.title}
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Full-width reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
            Understanding = Confidence Calibration + Reasoning Consistency + Cognitive Stability
          </h3>
          <p className="font-body text-lg text-text-secondary mb-6">
            This is what HCMS measures.
          </p>
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors"
          >
            Read the Research →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
