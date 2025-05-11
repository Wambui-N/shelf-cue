"use client";

import { motion } from 'motion/react';
import Link from 'next/link';

const CaseStudy = () => (
  <section className="py-16 w-full max-w-3xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-navy text-center mb-8"
    >
      How Acme Co. Grew Revenue 300% Using ActiveCampaign
    </motion.h2>
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
      <div className="flex-1 bg-offwhite rounded-xl p-6 shadow text-center">
        <div className="text-4xl font-bold text-blue mb-2">+300%</div>
        <div className="text-navy/80">Revenue Growth</div>
        <div className="mt-4 text-sm text-navy/60">Before: $10k/mo<br />After: $40k/mo</div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <img src="/case-study-automation.png" alt="Automation Workflow Screenshot" className="rounded-lg shadow-lg max-w-xs" />
        <div className="text-xs text-navy/60 mt-2">Example: Automation workflow</div>
      </div>
    </div>
    <div className="text-center">
      <Link
        href="https://activecampaign.com/affiliate-link?utm_source=shelfcue"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden group bg-blue text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition"
      >
        <span className="relative z-10">Get the Same Results →</span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
      </Link>
    </div>
  </section>
);

export default CaseStudy; 