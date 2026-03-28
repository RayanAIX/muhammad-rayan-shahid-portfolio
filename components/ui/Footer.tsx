import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { constants } from "@/lib/constants";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: constants.social.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: constants.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Kaggle",
      href: constants.social.kaggle,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.737 17.621v-6.411c0-2.465 1.747-4.535 4.094-4.535.878 0 1.709.305 2.393.851.727.57.915 1.322.915 2.093 0 1.267-.877 2.235-2.253 2.235-1.266 0-2.084-.724-2.367-1.679l-.568 1.475c.432.964 1.308 1.754 2.391 1.754 1.358 0 2.382-.92 2.382-2.635 0-2.258-1.908-3.473-4.191-3.473-2.58 0-4.074 1.949-4.074 4.183 0 .827.201 1.459.719 1.887.086.072.197.098.336.098.262 0 .391-.152.451-.29l1.152-.385c-.166-.293-.507-.532-1.026-.532-1.067 0-1.833.824-1.833 2.075 0 .739.297 1.345.858 1.708.247.161.36.385.36.659 0 .428-.422.772-1.065.772-1.065 0-1.811-1.46-1.811-3.447 0-1.054.56-1.812 1.573-1.812.889 0 1.364.525 1.591.917l1.135-.294c-.191-.518-.653-.918-1.403-.918-1.116 0-1.842.901-1.842 2.119 0 .623.249 1.127.711 1.506l.112.058.08-.099c1.309-.86 2.131-2.132 2.131-3.621 0-2.318-1.728-3.738-4.394-3.738zm-1.737 3.542c.789 0 1.449-.483 1.449-1.224 0-.766-.689-1.223-1.498-1.223-.833 0-1.45.486-1.45 1.223 0 .741.616 1.224 1.499 1.224zm3.474 0c.789 0 1.449-.483 1.449-1.224 0-.766-.689-1.223-1.498-1.223-.833 0-1.45.486-1.45 1.223 0 .741.617 1.224 1.499 1.224z" />
        </svg>
      ),
    },
    {
      name: "HuggingFace",
      href: constants.social.huggingface,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.765 11.365a4.542 4.542 0 0 1 .633-.409A4.167 4.167 0 0 1 7.5 7.5c0 .966.213 1.852.578 2.617a6.59 6.59 0 0 1 2.365-1.053c.808-.39 1.686.14 2.073.978a2.09 2.09 0 0 1-.133 2.061c0 3.104 2.191 5.6 5.2 5.6a4.82 4.82 0 0 0 3.843-1.665c.91-.438 1.163-1.48.639-2.283a6.592 6.592 0 0 1-2.365-1.053c-.81-.39-1.689.14-2.073.977a2.082 2.082 0 0 1-.133-2.061c0-3.104-2.2-5.6-5.2-5.6a4.82 4.82 0 0 0-3.838 1.665c-.906.438-1.16 1.48-.636 2.283z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: constants.social.youtube,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Substack",
      href: constants.social.substack,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.539 6.082c-.196-.979-.95-1.695-1.856-1.794-.386-.042-.752-.103-1.095-.192l-2.912.641a.373.373 0 0 0-.297.016c-.105 0-.23-.028-.367-.09l-2.455-1.317a.333.333 0 0 0-.273-.107c-.112 0-.217.037-.293.105l-1.792 2.093c-.033.042-.073.088-.115.141l-.015.02a.37.37 0 0 0-.147.296c0 .042.004.084.018.12l2.362 1.191c.042.021.088.021.131.021.183 0 .354-.067.499-.2.209-.185.287-.494.215-.81a1.973 1.973 0 0 0-.396-.722l.792-2.1a2.191 2.191 0 0 0 .619-.908c.183-.301.431-.493.725-.566a1.867 1.867 0 0 1 .447-.071l2.726.413a.409.409 0 0 1 .282.736z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-primary border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Top glow line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

          {/* Tagline */}
          <motion.p
            className="text-text-secondary font-mono text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {constants.name} · Built with obsession · {constants.location}
          </motion.p>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <p className="text-text-dim text-xs font-mono">
            © 2026 Muhammad Rayan Shahid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
