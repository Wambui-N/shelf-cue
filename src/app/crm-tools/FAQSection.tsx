"use client";

import { motion } from 'motion/react';
import Link from 'next/link';

const faqs = [
  {
    q: "What's the easiest CRM to use?",
    a: (
      <>
        {"HubSpot's free plan is the most beginner-friendly, but if you need more advanced features, check out our "}
        <Link href="/blog/hubspot-vs-salesforce" className="text-blue underline hover:text-orange transition">full comparison</Link>
        {" or try "}
        <Link href="https://hubspot.com/affiliate-link" target="_blank" rel="noopener noreferrer" className="text-blue underline hover:text-orange transition">HubSpot here</Link>.
      </>
    ),
  },
  {
    q: 'Is Salesforce worth the price?',
    a: (
      <>
        Only if you have 10+ employees. For solopreneurs, we recommend <Link href="https://zoho.com/affiliate-link" target="_blank" rel="noopener noreferrer" className="text-blue underline hover:text-orange transition">Zoho CRM</Link> for its affordability and ease of use.
      </>
    ),
  },
];

const FAQSection = () => (
  <section className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-navy text-center mb-10"
    >
      CRM FAQs
    </motion.h2>
    <div className="space-y-8">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.q}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h3 className="text-lg font-bold text-navy mb-2">{faq.q}</h3>
          <div className="text-navy/80 font-light text-base">{faq.a}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FAQSection; 