"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Trail effect
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const trailLength = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      trailRef.current = [
        { x: mouseX.get(), y: mouseY.get() },
        ...trailRef.current,
      ].slice(0, trailLength);
    }, 40); // Update trail every 40ms

    return () => clearInterval(interval);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.opacity = "1";
        ringRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.opacity = "0";
        ringRef.current.style.opacity = "0";
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHover);
      el.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-accent-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? "rgba(0, 212, 255, 0.1)" : "transparent",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Inner dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicking ? 0.8 : 1,
        }}
      />

      {/* Faint trailing dots */}
      {trailRef.current.map((pos, i) => (
        <div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 bg-accent-primary rounded-full pointer-events-none z-[9998] mix-blend-difference"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            scale: 1 - (i / trailLength) * 0.8,
            opacity: 0.3 * (1 - i / trailLength),
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
