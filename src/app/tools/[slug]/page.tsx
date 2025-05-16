"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';

// Import the tools data
import { tools } from '@/components/TopTools';

interface Props {
  params: {
    slug: string;
  };
}

// Tool-specific data
const toolDetails = {
  kajabi: {
    pros: [
      "All-in-one platform for courses, websites, and marketing",
      "Built-in email marketing and automation",
      "Professional templates and customization options",
      "Strong community and support system"
    ],
    cons: [
      "Higher price point compared to individual tools",
      "Steeper learning curve for beginners",
      "Limited third-party integrations",
      "Can be overwhelming for simple needs"
    ],
    features: [
      "Course creation and hosting",
      "Website builder",
      "Email marketing",
      "Membership sites",
      "Payment processing",
      "Analytics and reporting"
    ],
    pricing: {
      starting: "$149",
      period: "month",
      url: "https://kajabi.com/pricing"
    },
    website: "https://kajabi.com"
  },
  semrush: {
    pros: [
      "Comprehensive SEO toolkit",
      "Accurate keyword research data",
      "Competitive analysis features",
      "Regular data updates"
    ],
    cons: [
      "Expensive for small businesses",
      "Complex interface for beginners",
      "Some features require higher plans",
      "Limited free trial"
    ],
    features: [
      "Keyword research",
      "Competitor analysis",
      "Backlink analysis",
      "Content optimization",
      "Rank tracking",
      "Local SEO tools"
    ],
    pricing: {
      starting: "$119.95",
      period: "month",
      url: "https://www.semrush.com/prices/"
    },
    website: "https://www.semrush.com"
  },
  // Add more tool details as needed
};

const ToolPage = (props: any) => {
  // Find the tool based on the slug
  const tool = tools.find(t => t.link === `/tools/${props.params.slug}`);
  const details = tool ? toolDetails[props.params.slug as keyof typeof toolDetails] : null;

  if (!tool || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Tool not found</h1>
          <Link href="/" className="text-blue hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-offwhite">
      {/* Hero Section */}
      <section className="relative bg-navy text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {tool.name}
              </h1>
              <p className="text-lg text-white/80 mb-8">
                {tool.description}
              </p>
              <div className="flex gap-4">
                <a 
                  href={details.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue hover:bg-blue/90 rounded-xl transition-colors"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href={details.pricing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                >
                  View Pricing
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 md:h-80 bg-white rounded-2xl p-8"
            >
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-navy mb-6">Overview</h2>
                <p className="text-navy/80 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Pros & Cons */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-navy mb-6">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      Pros
                    </h3>
                    <ul className="space-y-3">
                      {details.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-navy/80">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      Cons
                    </h3>
                    <ul className="space-y-3">
                      {details.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-navy/80">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-navy mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {details.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-blue mr-3 flex-shrink-0" />
                      <span className="text-navy/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Rating */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-semibold text-navy mb-4">Our Rating</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-navy/60">4.0/5.0</span>
                </div>
                <p className="text-navy/80 text-sm">
                  Based on our comprehensive review and testing
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-semibold text-navy mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-navy/80">Starting from</span>
                    <span className="font-semibold text-navy">
                      {details.pricing.starting}/{details.pricing.period}
                    </span>
                  </div>
                  <a 
                    href={details.pricing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-blue hover:bg-blue/90 text-white rounded-xl transition-colors text-center"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-semibold text-navy mb-4">Related Tools</h3>
                <div className="space-y-4">
                  {tools
                    .filter(t => t.category === tool.category && t.name !== tool.name)
                    .slice(0, 3)
                    .map(relatedTool => (
                      <Link 
                        key={relatedTool.name}
                        href={relatedTool.link}
                        className="block p-4 rounded-xl hover:bg-navy/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 bg-offwhite rounded-lg">
                            <Image
                              src={relatedTool.image}
                              alt={relatedTool.name}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-navy">{relatedTool.name}</h4>
                            <p className="text-sm text-navy/60">{relatedTool.category}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ToolPage; 