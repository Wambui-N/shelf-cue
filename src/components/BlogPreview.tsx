"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'HubSpot vs. Salesforce: Which CRM Wins in 2024?',
    excerpt: 'A head-to-head comparison of the two CRM giants—features, pricing, and which is best for your business.',
    link: '/blog/hubspot-vs-salesforce',
    category: 'CRM Comparison'
  },
  {
    title: 'ActiveCampaign Review: Is It Worth the Price?',
    excerpt: 'We put ActiveCampaign to the test. See if its automation and email features justify the cost.',
    link: '/blog/activecampaign-review',
    category: 'Tool Review'
  },
  {
    title: '7 CRM Hacks to Double Your Sales',
    excerpt: 'Practical, actionable CRM tips to help you close more deals and grow your business faster.',
    link: '/blog/crm-hacks',
    category: 'Tips & Tricks'
  },
];

const BlogPreview = () => (
  <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24">
    <div className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue/5 via-transparent to-transparent" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-navy text-center mb-16"
      >
        Latest <span className="text-blue">Insights</span> & Guides
      </motion.h2>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8"
        >
          <Link href={articles[0].link} className="group">
            <div className="relative rounded-2xl bg-white shadow-lg overflow-hidden">
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue/10 text-blue rounded-full text-sm font-medium mb-4">
                  {articles[0].category}
                </span>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-blue transition-colors">
                  {articles[0].title}
                </h3>
                <p className="text-navy/80 font-light mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center text-blue font-medium">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Side articles */}
        <div className="lg:col-span-4 space-y-8">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Link href={article.link} className="group">
                <div className="bg-offwhite rounded-xl p-6 hover:bg-white transition-colors">
                  <span className="inline-block px-2 py-1 bg-navy/5 text-navy rounded-full text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h4 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-navy/70 text-sm font-light">{article.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BlogPreview; 