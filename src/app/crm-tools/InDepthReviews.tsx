"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const reviews = [
  {
    name: 'HubSpot',
    subheader: 'HubSpot Review: The Best Free CRM for Growing Businesses?',
    pros: ['Free plan', 'Superb marketing integrations'],
    cons: ['Expensive at higher tiers'],
    pricing: [
      { tier: 'Free', price: '$0/mo' },
      { tier: 'Starter', price: '$45/mo' },
      { tier: 'Pro', price: '$800/mo' },
    ],
    cta: 'Get 20% Off HubSpot →',
    ctaLink: 'https://hubspot.com/affiliate-link',
  },
  {
    name: 'Salesforce',
    subheader: 'Salesforce Review: Overkill or Must-Have for Enterprises?',
    keyFeature: 'Best customization & reporting',
    warning: 'Steep learning curve',
    pricing: [
      { tier: 'Starter', price: '$25/user/mo' },
      { tier: 'Pro', price: '$300/user/mo' },
    ],
    cta: 'Try Salesforce Free →',
    ctaLink: 'https://salesforce.com/affiliate-link',
    alternative: {
      text: 'Prefer something simpler? Try ',
      linkText: 'ActiveCampaign',
      link: 'https://activecampaign.com/affiliate-link',
    },
  },
];

const InDepthReviews = () => (
  <section className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16">
    {reviews.map((r, i) => (
      <motion.div
        key={r.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="mb-16 last:mb-0"
      >
        <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">{r.subheader}</h2>
        {/* HubSpot: Pros/Cons, Pricing, CTA */}
        {r.pros && (
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="flex-1">
              <h3 className="font-semibold text-blue mb-2">Pros</h3>
              <ul className="space-y-2">
                {r.pros.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-navy/90"><CheckCircle className="w-5 h-5 text-blue" /> {p}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-orange mb-2">Cons</h3>
              <ul className="space-y-2">
                {r.cons.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-navy/90"><XCircle className="w-5 h-5 text-orange" /> {c}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Salesforce: Key Feature, Warning, Alternatives */}
        {r.keyFeature && (
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="flex-1">
              <h3 className="font-semibold text-blue mb-2">Key Feature</h3>
              <div className="flex items-center gap-2 text-navy/90"><CheckCircle className="w-5 h-5 text-blue" /> {r.keyFeature}</div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-orange mb-2">Warning</h3>
              <div className="flex items-center gap-2 text-navy/90"><AlertCircle className="w-5 h-5 text-orange" /> {r.warning}</div>
            </div>
          </div>
        )}
        {/* Pricing Table */}
        <div className="mb-6">
          <h3 className="font-semibold text-navy mb-2">Pricing</h3>
          <div className="flex flex-wrap gap-4">
            {r.pricing.map((p) => (
              <div key={p.tier} className="bg-offwhite rounded-lg px-4 py-2 text-navy font-medium shadow">
                <span className="text-blue mr-2">{p.tier}:</span> {p.price}
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mb-4">
          <Link
            href={r.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group bg-blue text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition"
          >
            <span className="relative z-10">{r.cta}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
          </Link>
        </div>
        {/* Alternatives */}
        {r.alternative && (
          <div className="text-navy/80 text-sm">
            {r.alternative.text}
            <Link href={r.alternative.link} target="_blank" rel="noopener noreferrer" className="text-blue underline hover:text-orange transition">{r.alternative.linkText}</Link>.
          </div>
        )}
      </motion.div>
    ))}
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

export default InDepthReviews; 