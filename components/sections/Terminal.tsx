"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Command {
  prompt: string;
  response: string;
}

const Terminal: React.FC = () => {
  const commands: Command[] = [
    {
      prompt: "rayan@bytebrilliance:~$ whoami",
      response: `> Muhammad Rayan Shahid
  Independent AI Researcher · Age 16 · Karachi, Pakistan`,
    },
    {
      prompt: "rayan@bytebrilliance:~$ describe --self",
      response: `> I don't wait for permission to research.
  I find the gap. I build the framework. I publish.`,
    },
    {
      prompt: "rayan@bytebrilliance:~$ ls ./projects",
      response: `> HCMS/  FakeNewsDetector/  EmotionAI/  CognitiveBenchmark/
  MedicalImaging/  SpeechTranslator/  LearningAnalytics/
  ... 16 more`,
    },
    {
      prompt: "rayan@bytebrilliance:~$ cat mission.txt",
      response: `> Build AI systems that treat humans as thinking machines,
  not answer-producing machines.`,
    },
    {
      prompt: "rayan@bytebrilliance:~$ echo $CURRENT_STATUS",
      response: `> Building. Researching. Publishing. At 16.`,
    },
  ];

  const [displayedCommands, setDisplayedCommands] = useState<Command[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTypingPrompt, setIsTypingPrompt] = useState(true);
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      // Reset and loop after a pause
      setTimeout(() => {
        setDisplayedCommands([]);
        setCurrentCommandIndex(0);
        setPromptText("");
        setResponseText("");
      }, 3000);
      return;
    }

    const currentCommand = commands[currentCommandIndex];

    if (isTypingPrompt) {
      if (promptText.length < currentCommand.prompt.length) {
        const timer = setTimeout(() => {
          setPromptText(currentCommand.prompt.slice(0, promptText.length + 1));
        }, 20);
        return () => clearTimeout(timer);
      } else {
        setIsTypingPrompt(false);
        setTimeout(() => setIsTypingResponse(true), 400);
      }
    } else if (isTypingResponse) {
      if (responseText.length < currentCommand.response.length) {
        const timer = setTimeout(() => {
          setResponseText(
            currentCommand.response.slice(0, responseText.length + 1)
          );
        }, 8);
        return () => clearTimeout(timer);
      } else {
        // Command complete, add to list and move to next
        setDisplayedCommands([...displayedCommands, currentCommand]);
        setCurrentCommandIndex(currentCommandIndex + 1);
        setIsTypingPrompt(true);
        setIsTypingResponse(false);
        setPromptText("");
        setResponseText("");
      }
    }
  }, [
    currentCommandIndex,
    isTypingPrompt,
    isTypingResponse,
    promptText,
    responseText,
    displayedCommands,
  ]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-primary py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="terminal">
          {/* Header */}
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="ml-4 font-mono text-text-secondary text-sm">
              rayan@bytebrilliance:~/ — bash
            </span>
          </div>

          {/* Body */}
          <div className="terminal-body space-y-6">
            {displayedCommands.map((cmd, index) => (
              <div key={index} className="command-group">
                {/* Prompt */}
                <div className="flex items-start gap-2 mb-1">
                  <span className="terminal-prompt font-mono text-accent-primary">
                    rayan@bytebrilliance:~$
                  </span>
                  <span className="terminal-command font-mono text-text-secondary">
                    {cmd.prompt.split("$ ")[1]}
                  </span>
                </div>
                {/* Response */}
                <div className="terminal-output whitespace-pre-wrap pl-0 font-mono text-sm">
                  {cmd.response}
                </div>
              </div>
            ))}

            {/* Currently typing command */}
            {currentCommandIndex < commands.length && (
              <div className="command-group">
                {/* Current prompt */}
                <div className="flex items-start gap-2 mb-1">
                  <span className="terminal-prompt font-mono text-accent-primary">
                    rayan@bytebrilliance:~$
                  </span>
                  <span className="terminal-command font-mono text-text-secondary">
                    {promptText.split("$ ")[1] || ""}
                  </span>
                  {showCursor && isTypingPrompt && (
                    <span className="inline-block w-2 h-4 bg-accent-primary ml-1 animate-pulse" />
                  )}
                </div>

                {/* Current response */}
                {responseText && (
                  <div className="terminal-output whitespace-pre-wrap pl-0 font-mono text-sm">
                    <span className="opacity-90">{"> "}</span>
                    {responseText}
                    {showCursor && isTypingResponse && (
                      <span className="inline-block w-2 h-4 bg-accent-primary ml-1 animate-pulse" />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

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
