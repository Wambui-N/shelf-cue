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
  <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24">
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange/5 rounded-full blur-3xl" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-navy text-center mb-16"
      >
        Why Trust <span className="text-blue">ShelfCue</span>?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group relative"
          >
            <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Icon container with gradient background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-orange/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-navy/80 font-light leading-relaxed">
                {feature.desc}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeTest; 