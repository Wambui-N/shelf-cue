"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => (
  <section className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gradient-to-br from-blue via-blue to-navy py-16 px-4 text-white">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-5xl font-bold text-center mb-6"
    >
      Turn Leads Into Revenue on Autopilot
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-lg md:text-xl text-center mb-8 font-light max-w-2xl"
    >
      The best marketing automation tools for ecommerce, SaaS, and agencies—tested hands-on.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Link
        href="/blog/activecampaign-review"
        className="relative overflow-hidden group bg-blue text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition border-2 border-blue"
      >
        <span className="relative z-10 flex items-center">See Our #1 Pick (Saves 10+ Hours/Week) <ArrowRight className="w-5 h-5 ml-1" /></span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
      </Link>
    </motion.div>
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

export default Hero; 