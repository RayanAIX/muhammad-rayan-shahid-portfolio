"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "prompt" | "response";
  text?: string;
  lines?: string[];
}

const terminalLines: TerminalLine[] = [
  { type: "prompt", text: "whoami" },
  {
    type: "response",
    lines: [
      "Muhammad Rayan Shahid",
      "Independent AI Researcher · Age 16 · Karachi, Pakistan",
    ],
  },
  { type: "prompt", text: "describe --self" },
  {
    type: "response",
    lines: [
      "I don't wait for permission to research.",
      "I find the gap. I build the framework. I publish.",
      "Then I do it again.",
    ],
  },
  { type: "prompt", text: "ls ./research" },
  {
    type: "response",
    lines: [
      "HCMS/                  CognitiveBenchmark/",
      "LearningAnalytics/     ConfidenceCalibration/",
    ],
  },
  { type: "prompt", text: "ls ./projects" },
  {
    type: "response",
    lines: [
      "FakeNewsDetector/      EmotionClassifier/",
      "MedicalImaging/        SpeechTranslator/",
      "SocialAutomation/      ... +16 more",
    ],
  },
  { type: "prompt", text: "cat mission.txt" },
  {
    type: "response",
    lines: [
      "Build AI that measures human cognition,",
      "not just human performance.",
      "Then publish the framework. At any age.",
    ],
  },
  { type: "prompt", text: "echo $CURRENT_STATUS" },
  {
    type: "response",
    lines: [
      "Building. Researching. Publishing.",
      "Age 16. No permission required.",
    ],
  },
];

const Terminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= terminalLines.length) {
      // Loop after pause
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentIndex(0);
        setTypingText("");
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const currentLine = terminalLines[currentIndex];

    if (currentLine.type === "prompt") {
      // Type out the prompt character by character
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypingText(currentLine.text!.slice(0, i));
        if (i >= currentLine.text!.length) {
          clearInterval(interval);
          // Prompt finished, add to displayed
          setDisplayedLines((prev) => [
            ...prev,
            { type: "prompt", text: currentLine.text },
          ]);
          setTypingText("");
          // After a short delay, move to response
          const wait = setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
          }, 200);
          return () => clearTimeout(wait);
        }
      }, 35);
      return () => clearInterval(interval);
    } else if (currentLine.type === "response") {
      // Response appears instantly
      setDisplayedLines((prev) => [
        ...prev,
        { type: "response", lines: currentLine.lines },
      ]);
      // Wait then next
      const wait = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1500); // adjust dwell as needed
      return () => clearTimeout(wait);
    }
  }, [currentIndex, typingText]);

  return (
    <section className="min-h-screen bg-primary py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="terminal"
        >
          {/* Window header */}
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="ml-4 font-mono text-text-dim text-sm">
              rayan@bytebrilliance:~ — zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="terminal-body grain-overlay" ref={containerRef}>
            {/* Previously completed lines */}
            {displayedLines.map((line, idx) => (
              <div key={idx} className="command-group mb-4">
                {line.type === "prompt" && line.text && (
                  <div className="flex items-start gap-2">
                    <span className="terminal-prompt font-mono text-accent-primary">
                      rayan@bytebrilliance:~$
                    </span>
                    <span className="terminal-command font-mono text-text-primary">
                      {line.text}
                    </span>
                  </div>
                )}
                {line.type === "response" && line.lines && (
                  <div className="terminal-output ml-4 space-y-1">
                    {line.lines.map((lineText, lineIdx) => (
                      <div key={lineIdx} className="flex items-start gap-2">
                        <span className="terminal-response-prefix font-mono text-sm text-accent-primary">
                          &gt;
                        </span>
                        <p className="font-mono text-sm text-text-primary">
                          {lineText}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Current typing prompt */}
            {typingText !== "" && (
              <div className="command-group">
                <div className="flex items-start gap-2">
                  <span className="terminal-prompt font-mono text-accent-primary">
                    rayan@bytebrilliance:~$
                  </span>
                  <span className="terminal-command font-mono text-text-primary">
                    {typingText}
                    {showCursor && (
                      <span className="inline-block w-2 h-4 bg-accent-primary ml-1 animate-pulse" />
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <span className="font-mono text-sm text-text-dim">
            AI Identity Terminal
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
