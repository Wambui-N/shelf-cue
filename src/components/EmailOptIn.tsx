"use client";

import { motion } from 'motion/react';
import { useState } from 'react';

const EmailOptIn = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with your email/lead service
  };

  return (
    <section className="relative z-10 w-full max-w-xl mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-bold text-navy text-center mb-4"
      >
        Get Our Free CRM Buyer's Checklist
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-navy/80 text-center mb-8 font-light"
      >
        <em>Download the 10-point checklist to avoid costly mistakes.</em>
      </motion.p>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue/10 border border-blue rounded-2xl p-6 text-center text-blue font-medium"
        >
          Thank you! Check your inbox for the checklist.
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full max-w-xs px-4 py-3 rounded-lg border border-offwhite focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none font-regular text-navy placeholder:text-navy/40 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full max-w-xs px-4 py-3 rounded-lg border border-offwhite focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none font-regular text-navy placeholder:text-navy/40 transition"
          />
          <button
            type="submit"
            className="relative overflow-hidden group bg-blue text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition mt-2"
          >
            <span className="relative z-10">Send Me the Checklist</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
          </button>
        </motion.form>
      )}
      {/* Shimmer animation for CTA */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EmailOptIn; 