"use client";

import { motion } from 'motion/react';
import { Search, BarChart3, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-8 h-8 text-blue" />,
    title: 'Hands-On Testing',
    desc: 'We actually use and test every tool we review.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange" />,
    title: 'Data-Driven Comparisons',
    desc: 'Our reviews are based on real data, not opinions.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-navy" />,
    title: 'No Ads. We Earn Only If You Buy.',
    desc: "We're affiliate-supported, so our advice stays unbiased."
  },
];

const HowWeTest = () => (
  <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-4xl font-bold text-navy text-center mb-12"
    >
      Why Trust ShelfCue?
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(13,24,70,0.10)' }}
          className="rounded-2xl bg-white shadow-md p-8 flex flex-col items-center text-center transition"
        >
          <div className="mb-4">{f.icon}</div>
          <h3 className="text-lg font-bold text-navy mb-2">{f.title}</h3>
          <p className="text-navy/80 font-light text-base">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowWeTest; 