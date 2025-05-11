"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const NAVBAR_HEIGHT = 'pt-24'; // 96px, adjust if your navbar is taller/shorter

const Hero = () => {
  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-blue via-blue to-navy flex items-center justify-center py-8 px-2 ${NAVBAR_HEIGHT}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-5xl bg-offwhite/90 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Column */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          {/* Animated Gradient Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue via-orange to-navy bg-clip-text text-transparent animate-gradient"
          >
            Stop Wasting Money on the Wrong Software
          </motion.h1>
          {/* Animated Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-navy/80 text-lg md:text-xl mb-8 font-light"
          >
            Unbiased CRM & Marketing Automation Reviews – We Test So You Don't Have To.
          </motion.p>
          {/* Animated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link href="/crm-tools" className="relative overflow-hidden group bg-blue text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition">
              <span className="relative z-10 flex items-center">See Top Picks <ArrowRight className="w-5 h-5 ml-1" /></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
            </Link>
            <Link href="/methodology" className="bg-offwhite/70 text-blue px-7 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/90 hover:text-navy transition">
              How We Test Tools
            </Link>
          </motion.div>
        </div>
        {/* Right Column: Floating SaaS Dashboard Mockup */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6 p-8 md:p-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
            className="w-full flex justify-center"
          >
            <Image
              src="/images/dashboard-mockup.png"
              alt="SaaS Dashboard Mockup"
              width={360}
              height={220}
              className="rounded-2xl shadow-lg border border-offwhite/60 object-cover bg-white/80"
              style={{ boxShadow: '0 8px 32px 0 rgba(13,24,70,0.10)' }}
            />
          </motion.div>
        </div>
      </motion.div>
      {/* Gradient and shimmer animation styles */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
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
    </div>
  );
};

export default Hero; 