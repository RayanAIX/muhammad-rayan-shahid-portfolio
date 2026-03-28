"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { constants } from "@/lib/constants";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - replace with your actual credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "default";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "default";
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "default";

      await emailjs.send(serviceId, templateId, {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
        to_email: constants.email,
      }, userId);

      setSubmitStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    { name: "GitHub", href: constants.social.github },
    { name: "LinkedIn", href: constants.social.linkedin },
    { name: "Kaggle", href: constants.social.kaggle },
    { name: "HuggingFace", href: constants.social.huggingface },
    { name: "YouTube", href: constants.social.youtube },
    { name: "Substack", href: constants.social.substack },
  ];

  return (
    <section id="contact" className="min-h-screen bg-primary py-24 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Let&apos;s do something
            <br />
            <span className="text-accent-primary">that matters.</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Researchers, universities, collaborators, people who read HCMS and had
            thoughts — reach out. I read everything.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-bg-card border border-border rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block font-mono text-sm text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-text-primary font-body placeholder-text-dim focus:outline-none focus:border-accent-primary transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-sm text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-text-primary font-body placeholder-text-dim focus:outline-none focus:border-accent-primary transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block font-mono text-sm text-text-secondary mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-text-primary font-body placeholder-text-dim focus:outline-none focus:border-accent-primary transition-colors duration-300"
              placeholder="What's this about?"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-mono text-sm text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-text-primary font-body placeholder-text-dim focus:outline-none focus:border-accent-primary transition-colors duration-300 resize-none"
              placeholder="Tell me about your project, opportunity, or just say hi..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : submitStatus === "success" ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message received. I'll respond within 24 hours.
              </span>
            ) : submitStatus === "error" ? (
              <span className="flex items-center justify-center gap-3 text-red-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Something went wrong. Please try again.
              </span>
            ) : (
              "Send Message →"
            )}
          </button>
        </motion.form>

        {/* Social Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="font-mono text-text-dim text-sm mb-6">
            Or connect directly:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/30 border border-border hover:border-accent-primary/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-accent-primary/40" />
                </div>
                <span className="font-mono text-xs text-text-secondary group-hover:text-accent-primary transition-colors">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
