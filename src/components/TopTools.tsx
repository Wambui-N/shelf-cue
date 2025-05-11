"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const tools = [
  {
    name: 'HubSpot',
    logo: '/hubspot-logo.png',
    why: 'Best all-in-one CRM + marketing',
    cta: 'Get 20% Off',
    ctaLink: 'https://hubspot.com/affiliate-link',
    badge: 'Top Pick',
    badgeColor: 'bg-orange text-white',
    cardColor: 'bg-white',
  },
  {
    name: 'ActiveCampaign',
    logo: '/activecampaign-logo.png',
    why: 'Top for email automation',
    cta: 'Start Free Trial',
    ctaLink: 'https://activecampaign.com/affiliate-link',
    badge: '',
    badgeColor: '',
    cardColor: 'bg-offwhite',
  },
  {
    name: 'Salesforce',
    logo: '/salesforce-logo.png',
    why: 'Enterprise-grade CRM',
    cta: 'Book Demo',
    ctaLink: 'https://salesforce.com/affiliate-link',
    badge: '',
    badgeColor: '',
    cardColor: 'bg-white',
  },
];

const TopTools = () => (
  <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-4xl font-bold text-navy text-center mb-12"
    >
      Top 3 Recommended Tools
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {tools.map((tool, i) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.15 }}
          whileHover={{ scale: 1.01, boxShadow: '0 8px 32px 0 rgba(13,24,70,0.10)' }}
          className={`relative rounded-2xl shadow-md p-8 flex flex-col items-center ${tool.cardColor} transition`}
        >
          {/* Badge */}
          {tool.badge && (
            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow ${tool.badgeColor} animate-gradient`}>{tool.badge}</span>
          )}
          {/* Logo */}
          <div className="mb-4">
            <Image src={tool.logo} alt={`${tool.name} logo`} width={56} height={56} className="object-contain" />
          </div>
          {/* Name */}
          <h3 className="text-xl font-bold text-navy mb-2">{tool.name}</h3>
          {/* Why */}
          <p className="text-navy/80 text-center mb-6 font-light">{tool.why}</p>
          {/* CTA */}
          <Link
            href={tool.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group bg-blue text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition"
          >
            <span className="relative z-10 flex items-center">{tool.cta} <ArrowRight className="w-4 h-4 ml-1" /></span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
          </Link>
        </motion.div>
      ))}
    </div>
    {/* Gradient and shimmer animation styles for badge/cta */}
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
  </section>
);

export default TopTools; 