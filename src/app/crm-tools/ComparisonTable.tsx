"use client";

import { motion } from 'motion/react';
import Link from 'next/link';

const crms = [
  {
    name: 'HubSpot',
    bestFor: 'All-in-one marketing',
    pricing: 'Free–$1.2k/mo',
    rating: 4.5,
    cta: 'Get Deal',
    ctaLink: 'https://hubspot.com/affiliate-link',
  },
  {
    name: 'Salesforce',
    bestFor: 'Enterprise sales',
    pricing: '$25–$300/user/mo',
    rating: 4.7,
    cta: 'Try Free',
    ctaLink: 'https://salesforce.com/affiliate-link',
  },
  {
    name: 'Zoho CRM',
    bestFor: 'Budget-friendly',
    pricing: '$14–$52/user/mo',
    rating: 4.2,
    cta: 'Start Trial',
    ctaLink: 'https://zoho.com/affiliate-link',
  },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={i} className="text-orange">★</span>
      ))}
      {half && <span className="text-orange">☆</span>}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <span key={i} className="text-offwhite/60">★</span>
      ))}
    </span>
  );
}

const ComparisonTable = () => (
  <section id="crm-comparison" className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-xl md:text-2xl font-bold text-navy text-center mb-8"
    >
      CRM Comparison Table
    </motion.h2>
    <div className="overflow-x-auto rounded-2xl shadow bg-white">
      <table className="min-w-full text-left text-navy">
        <thead>
          <tr className="bg-offwhite text-navy/80">
            <th className="py-4 px-4 font-semibold">CRM</th>
            <th className="py-4 px-4 font-semibold">Best For</th>
            <th className="py-4 px-4 font-semibold">Pricing</th>
            <th className="py-4 px-4 font-semibold">Rating</th>
            <th className="py-4 px-4 font-semibold">Link</th>
          </tr>
        </thead>
        <tbody>
          {crms.map((crm, i) => (
            <motion.tr
              key={crm.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b last:border-0 hover:bg-blue/5 transition"
            >
              <td className="py-4 px-4 font-bold">{crm.name}</td>
              <td className="py-4 px-4">{crm.bestFor}</td>
              <td className="py-4 px-4">{crm.pricing}</td>
              <td className="py-4 px-4">{renderStars(crm.rating)} <span className="ml-2 text-xs text-navy/60">{crm.rating.toFixed(1)}</span></td>
              <td className="py-4 px-4">
                <Link
                  href={crm.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue/90 transition"
                >
                  {crm.cta}
                </Link>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default ComparisonTable; 