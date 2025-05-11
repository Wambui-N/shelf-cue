"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const related = [
  {
    title: 'HubSpot vs. Salesforce: Ultimate 2024 Comparison',
    link: '/blog/hubspot-vs-salesforce',
  },
  {
    title: '7 CRM Hacks to 3X Your Sales',
    link: '/blog/crm-hacks',
  },
  {
    title: 'Best Free CRMs for Startups',
    link: '/blog/best-free-crms',
  },
];

const RelatedContent = () => (
  <section className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-navy text-center mb-10"
    >
      Related Content
    </motion.h2>
    <div className="space-y-6">
      {related.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <Link
            href={item.link}
            className="flex items-center gap-2 text-blue font-medium text-lg hover:text-orange transition"
          >
            {item.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default RelatedContent; 