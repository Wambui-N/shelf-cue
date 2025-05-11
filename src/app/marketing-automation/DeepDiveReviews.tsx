"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle, AlertCircle, Flame } from 'lucide-react';

const DeepDiveReviews = () => (
  <section className="py-16 w-full max-w-4xl mx-auto px-4">
    {/* ActiveCampaign Review */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">
        ActiveCampaign Review: The Swiss Army Knife of Marketing Automation?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <div className="flex-1">
          <h3 className="font-semibold text-blue mb-2">Why We Love It</h3>
          <div className="flex items-center gap-2 text-navy/90">
            <CheckCircle className="w-5 h-5 text-blue" /> Visual automation builder + best-in-class email marketing
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-orange mb-2">Watch Out For</h3>
          <div className="flex items-center gap-2 text-navy/90">
            <AlertCircle className="w-5 h-5 text-orange" /> Steep learning curve for beginners
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-navy mb-2">Pricing Breakdown</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-offwhite rounded-lg px-4 py-2 text-navy font-medium shadow">
            <span className="text-blue mr-2">Lite:</span> $29/mo (up to 1,000 contacts)
          </div>
          <div className="bg-offwhite rounded-lg px-4 py-2 text-navy font-medium shadow">
            <span className="text-blue mr-2">Plus:</span> $49/mo (CRM features)
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Link
          href="https://activecampaign.com/affiliate-link?utm_source=shelfcue"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden group bg-blue text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition"
        >
          <span className="relative z-10">Get 14-Day Free Trial →</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
        </Link>
      </div>
    </motion.div>
    {/* Kajabi Review */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-16"
    >
      <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">
        Kajabi Review: Is This the Best All-in-One Platform for Course Creators?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <div className="flex-1">
          <h3 className="font-semibold text-blue mb-2">Perfect For</h3>
          <div className="flex items-center gap-2 text-navy/90">
            <CheckCircle className="w-5 h-5 text-blue" /> Digital product sellers who want everything built-in
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-orange mb-2">Limitations</h3>
          <div className="flex items-center gap-2 text-navy/90">
            <AlertCircle className="w-5 h-5 text-orange" /> Overkill if you just need email automation
          </div>
        </div>
      </div>
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 text-navy/80 text-sm">
          <Flame className="w-4 h-4 text-orange" />
          Prefer simpler? Try{' '}
          <Link href="https://convertkit.com/affiliate-link?utm_source=shelfcue" target="_blank" rel="noopener noreferrer" className="text-blue underline hover:text-orange transition">
            ConvertKit
          </Link>
          {' '}instead.
        </span>
      </div>
    </motion.div>
  </section>
);

export default DeepDiveReviews; 