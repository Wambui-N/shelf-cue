"use client";

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Tool {
  name: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

interface ToolsByCategory {
  [key: string]: Tool[];
}

export const tools: Tool[] = [
  // CRM & Sales
  {
    name: 'HubSpot',
    description: 'All-in-one CRM platform with marketing, sales, and service tools.',
    image: '/hubspot-logo.svg',
    link: '/tools/hubspot',
    category: 'CRM & Sales'
  },
  {
    name: 'Close',
    description: 'Sales engagement platform for high-velocity sales teams.',
    image: '/close-logo.svg',
    link: '/tools/close',
    category: 'CRM & Sales'
  },
  // Marketing & Email
  {
    name: 'ActiveCampaign',
    description: 'Email marketing and automation platform for growing businesses.',
    image: '/activecampaign-logo.svg',
    link: '/tools/activecampaign',
    category: 'Marketing & Email'
  },
  {
    name: 'ConvertKit',
    description: 'Email marketing platform built for creators and small businesses.',
    image: '/convertkit-logo.svg',
    link: '/tools/convertkit',
    category: 'Marketing & Email'
  },
  // Course & Membership
  {
    name: 'Kajabi',
    description: 'All-in-one platform for online courses and membership sites',
    image: '/kajabi-logo.svg',
    link: '/tools/kajabi',
    category: 'Course Creation'
  },
  // SEO Tools
  {
    name: 'SEMrush',
    description: 'Comprehensive SEO and content marketing platform',
    image: '/semrush-logo.svg',
    link: '/tools/semrush',
    category: 'SEO'
  },
  {
    name: 'Ahrefs',
    description: 'SEO tools and resources for better rankings',
    image: '/ahrefs-logo.svg',
    link: '/tools/ahrefs',
    category: 'SEO'
  },
  {
    name: 'SurferSEO',
    description: 'AI-powered content optimization and keyword research tool.',
    image: '/surfer-logo.svg',
    link: '/tools/surfer',
    category: 'SEO Tools'
  },
  // Landing Pages
  {
    name: 'Leadpages',
    description: 'Landing page builder and lead generation platform',
    image: '/leadpages-logo.svg',
    link: '/tools/leadpages',
    category: 'Landing Pages'
  },
  // Video & Communication
  {
    name: 'Loom',
    description: 'Video messaging tool for async communication',
    image: '/loom-logo.svg',
    link: '/tools/loom',
    category: 'Communication'
  },
  // Automation & Scheduling
  {
    name: 'Make.com',
    description: 'Visual automation platform for workflows',
    image: '/make-logo.svg',
    link: '/tools/make',
    category: 'Automation'
  },
  {
    name: 'Cal.com',
    description: 'Open source scheduling infrastructure',
    image: '/cal-logo.svg',
    link: '/tools/cal',
    category: 'Scheduling'
  },
];

const TopTools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Get unique categories
  const categories = ['All', ...new Set(tools.map(tool => tool.category))];
  
  // Filter tools based on selected category
  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth'
      });
    }
  };

  // Reset scroll position when category changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ 
        left: 0, 
        behavior: 'smooth'
      });
    }
  }, [selectedCategory]);

  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24">
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy/5 via-transparent to-transparent" />
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-navy text-center mb-16"
        >
          Top <span className="text-blue">Tools</span> We Test
        </motion.h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue text-white shadow-lg shadow-blue/20'
                    : 'bg-white text-navy hover:bg-navy/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-blue hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-blue hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            <AnimatePresence mode="wait">
              {filteredTools.map((tool, i) => (
                <motion.div
                  key={`${selectedCategory}-${tool.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex-none w-[350px] snap-start"
                >
                  <Link href={tool.link}>
                    <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Tool image */}
                      <div className="relative h-48 bg-offwhite">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Tool info */}
                      <div className="p-6">
                        <span className="inline-block px-2.5 py-1 bg-navy/5 text-navy rounded-full text-xs font-medium mb-3">
                          {tool.category}
                        </span>
                        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-navy/70 text-sm font-light mb-4">
                          {tool.description}
                        </p>
                        <div className="flex items-center text-blue font-medium text-sm">
                          Read Review
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTools; 