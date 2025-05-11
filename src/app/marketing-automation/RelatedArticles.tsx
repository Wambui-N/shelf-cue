"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const related = [
  {
    title: 'ActiveCampaign vs. Kajabi: Which Automates More Revenue?',
    link: '/blog/activecampaign-vs-kajabi',
  },
  {
    title: '7 Marketing Automation Hacks for 2024',
    link: '/blog/marketing-automation-hacks',
  },
  {
    title: 'Best Cheap Alternatives to HubSpot Automation',
    link: '/blog/best-cheap-hubspot-alternatives',
  },
];

const RelatedArticles = () => (
  <section className="py-16 w-full max-w-3xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-navy text-center mb-10"
    >
      Related Articles
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

export default RelatedArticles; 