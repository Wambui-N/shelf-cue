"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'HubSpot vs. Salesforce: Which CRM Wins in 2024?',
    excerpt: 'A head-to-head comparison of the two CRM giants—features, pricing, and which is best for your business.',
    link: '/blog/hubspot-vs-salesforce',
  },
  {
    title: 'ActiveCampaign Review: Is It Worth the Price?',
    excerpt: 'We put ActiveCampaign to the test. See if its automation and email features justify the cost.',
    link: '/blog/activecampaign-review',
  },
  {
    title: '7 CRM Hacks to Double Your Sales',
    excerpt: 'Practical, actionable CRM tips to help you close more deals and grow your business faster.',
    link: '/blog/crm-hacks',
  },
];

const BlogPreview = () => (
  <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-4xl font-bold text-navy text-center mb-12"
    >
      Latest CRM & Marketing Automation Guides
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {articles.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(13,24,70,0.10)' }}
          className="rounded-2xl bg-offwhite shadow-md p-8 flex flex-col items-start transition"
        >
          <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{a.title}</h3>
          <p className="text-navy/80 font-light text-base mb-6">{a.excerpt}</p>
          <Link
            href={a.link}
            className="relative overflow-hidden group bg-blue text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition"
          >
            <span className="relative z-10 flex items-center">Read More <ArrowRight className="w-4 h-4 ml-1" /></span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
          </Link>
        </motion.div>
      ))}
    </div>
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

export default BlogPreview; 