"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => (
  <footer className="relative bg-navy text-offwhite pt-24 pb-12 px-4 mt-12 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue via-orange to-navy" />
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

    <div className="max-w-6xl mx-auto relative">
      {/* Newsletter Section */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-blue/10 to-orange/10 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with <span className="text-blue">ShelfCue</span>
            </h3>
            <p className="text-offwhite/80 mb-8">
              Get the latest tool reviews, comparisons, and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/50" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue hover:bg-blue/90 text-white rounded-xl transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <h4 className="text-xl font-bold text-white mb-6">ShelfCue</h4>
          <p className="text-offwhite/70 mb-6">
            Your trusted source for unbiased software reviews and comparisons.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/blog" className="text-offwhite/70 hover:text-blue transition">Blog</Link></li>
            <li><Link href="/comparisons" className="text-offwhite/70 hover:text-blue transition">Comparisons</Link></li>
            <li><Link href="/about" className="text-offwhite/70 hover:text-blue transition">About</Link></li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Top Categories</h4>
          <ul className="space-y-4">
            <li><Link href="/crm-tools" className="text-offwhite/70 hover:text-blue transition">CRM</Link></li>
            <li><Link href="/marketing-automation" className="text-offwhite/70 hover:text-blue transition">Marketing Automation</Link></li>
            <li><Link href="/sales-tools" className="text-offwhite/70 hover:text-blue transition">Sales Tools</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
          <ul className="space-y-4">
            <li><Link href="/affiliate-disclosure" className="text-offwhite/70 hover:text-blue transition">Affiliate Disclosure</Link></li>
            <li><Link href="/privacy-policy" className="text-offwhite/70 hover:text-blue transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-offwhite/70 hover:text-blue transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-offwhite/50 text-sm">
            &copy; {new Date().getFullYear()} ShelfCue. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/sitemap" className="text-offwhite/50 hover:text-blue text-sm transition">Sitemap</Link>
            <Link href="/contact" className="text-offwhite/50 hover:text-blue text-sm transition">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 