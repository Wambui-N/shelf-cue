"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const tools = [
  {
    name: 'ActiveCampaign',
    strengths: 'Best email workflows',
    weaknesses: 'Limited CRM features',
    price: '$29+/mo',
    deal: 'Get 14-Day Free Trial',
    dealLink: 'https://activecampaign.com/affiliate-link?utm_source=shelfcue',
    badge: 'Popular Choice',
    lastTested: '2024-06-01',
  },
  {
    name: 'Kajabi',
    strengths: 'All-in-one for courses',
    weaknesses: 'No native CRM',
    price: '$119+/mo',
    deal: 'Try Kajabi',
    dealLink: 'https://kajabi.com/affiliate-link?utm_source=shelfcue',
    badge: '',
    lastTested: '2024-06-01',
  },
  {
    name: 'ConvertKit',
    strengths: 'Creator-friendly',
    weaknesses: 'Basic automation',
    price: '$29+/mo',
    deal: 'Start Free',
    dealLink: 'https://convertkit.com/affiliate-link?utm_source=shelfcue',
    badge: '',
    lastTested: '2024-06-01',
  },
];

const filters = ['All', 'Small Business', 'Enterprise', 'Ecommerce'];

const ComparisonMatrix = () => {
  const [filter, setFilter] = useState('All');
  // For demo, all tools are shown for all filters
  const filtered = tools;
  return (
    <section id="comparison-matrix" className="py-16 w-full max-w-5xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-bold text-navy text-center mb-8"
      >
        Marketing Automation Comparison Matrix
      </motion.h2>
      <div className="flex justify-center gap-2 mb-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full font-medium border transition ${filter === f ? 'bg-blue text-white border-blue' : 'bg-offwhite text-navy border-offwhite hover:bg-blue/10'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-2xl shadow bg-white">
        <table className="min-w-full text-left text-navy">
          <thead>
            <tr className="bg-offwhite text-navy/80">
              <th className="py-4 px-4 font-semibold">Tool</th>
              <th className="py-4 px-4 font-semibold">Strengths</th>
              <th className="py-4 px-4 font-semibold">Weaknesses</th>
              <th className="py-4 px-4 font-semibold">Price</th>
              <th className="py-4 px-4 font-semibold">Deal</th>
              <th className="py-4 px-4 font-semibold">Last Tested</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tool, i) => (
              <motion.tr
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b last:border-0 hover:bg-blue/5 transition"
              >
                <td className="py-4 px-4 font-bold flex items-center gap-2">
                  {tool.name}
                  {tool.badge && (
                    <span className="ml-2 px-2 py-1 rounded-full bg-orange text-white text-xs font-bold animate-gradient">{tool.badge}</span>
                  )}
                </td>
                <td className="py-4 px-4">{tool.strengths}</td>
                <td className="py-4 px-4">{tool.weaknesses}</td>
                <td className="py-4 px-4">{tool.price}</td>
                <td className="py-4 px-4">
                  <Link
                    href={tool.dealLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue/90 transition"
                  >
                    {tool.deal}
                  </Link>
                </td>
                <td className="py-4 px-4 text-xs text-navy/60">{tool.lastTested}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ComparisonMatrix; 