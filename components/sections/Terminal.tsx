"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TERMINAL_LINES = [
  {
    cmd: "whoami",
    response: [
      "Muhammad Rayan Shahid",
      "Independent AI Researcher · Age 16 · Karachi, Pakistan",
    ],
  },
  {
    cmd: "describe --self",
    response: [
      "I don't wait for permission to research.",
      "I find the gap. I build the framework. I publish.",
      "Then I do it again.",
    ],
  },
  {
    cmd: "ls ./research/",
    response: [
      "HCMS/                     CognitiveBenchmark/",
      "LearningAnalytics/        ConfidenceCalibration/",
      "DOI: 10.5281/zenodo.18269740",
    ],
  },
  {
    cmd: "ls ./projects/",
    response: [
      "FakeNewsDetector/         EmotionClassifier/",
      "MedicalImaging/           SpeechTranslator/",
      "CastingDefectCNN/         RoadLaneDetection/",
      "TelcoChurnPredictor/      VehicleDetection/",
      "... +14 more",
    ],
  },
  {
    cmd: "cat mission.txt",
    response: [
      "Build AI that measures human cognition,",
      "not just human performance.",
      "Then publish the framework. At any age.",
    ],
  },
  {
    cmd: "echo $STATUS",
    response: [
      "Building. Researching. Publishing.",
      "Age 16. No permission required.",
    ],
  },
];

const Terminal: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [displayed, setDisplayed] = useState<Array<{ cmd: string; response: string[] }>>([]);
  const [currentCmd, setCurrentCmd] = useState<string>("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let mounted = true;
    let timers: NodeJS.Timeout[] = [];

    const runSequence = async () => {
      for (let i = 0; i < TERMINAL_LINES.length; i++) {
        const line = TERMINAL_LINES[i];
        // Type command
        for (let j = 0; j <= line.cmd.length; j++) {
          await new Promise((resolve) => {
            const t = setTimeout(() => {
              if (mounted) setCurrentCmd(line.cmd.slice(0, j));
              resolve(null);
            }, 40); // 40ms per char
            timers.push(t);
          });
        }
        await new Promise((resolve) => {
          const t = setTimeout(() => {
            if (mounted) {
              setDisplayed((prev) => [...prev, { cmd: line.cmd, response: line.response }]);
              setCurrentCmd("");
            }
            resolve(null);
          }, 150); // delay after command finishes
          timers.push(t);
        });
        // Blank line between pairs
        await new Promise((resolve) => {
          const t = setTimeout(resolve, 300);
          timers.push(t);
        });
      }
      if (mounted) {
        setIsComplete(true);
        // Restart after 4s
        const t = setTimeout(() => {
          if (mounted) {
            setDisplayed([]);
            setCurrentCmd("");
            setIsComplete(false);
            runSequence();
          }
        }, 4000);
        timers.push(t);
      }
    };

    if (inView) {
      runSequence();
    }

    return () => {
      mounted = false;
      timers.forEach(clearTimeout);
    };
  }, [inView]);

  // Blinking cursor
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="min-h-screen bg-primary py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
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
              rayan@hcms — zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="terminal-body">
            {/* Completed lines */}
            {displayed.map((line, idx) => (
              <div key={idx} className="command-group mb-4">
                <div className="flex items-start gap-2">
                  <span className="terminal-prompt font-mono text-[#00ff88]">
                    rayan@hcms:~$
                  </span>
                  <span className="terminal-command font-mono text-text-primary">
                    {line.cmd}
                  </span>
                </div>
                {line.response.map((respLine, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 ml-0">
                    <span className="terminal-response-prefix font-mono text-sm text-[#00d4ff]">
                      &gt;
                    </span>
                    <p className="font-mono text-sm text-[#cccccc]">{respLine}</p>
                  </div>
                ))}
              </div>
            ))}

            {/* Current typing command */}
            {currentCmd !== "" && (
              <div className="command-group">
                <div className="flex items-start gap-2">
                  <span className="terminal-prompt font-mono text-[#00ff88]">
                    rayan@hcms:~$
                  </span>
                  <span className="terminal-command font-mono text-text-primary">
                    {currentCmd}
                    {showCursor && (
                      <span className="inline-block w-2 h-4 bg-[#00d4ff] ml-1 animate-pulse" />
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
