"use client";

import Link from 'next/link';

const Footer = () => (
  <footer className="bg-navy text-offwhite pt-12 pb-6 px-4 mt-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link href="/blog" className="hover:text-blue transition">Blog</Link></li>
          <li><Link href="/comparisons" className="hover:text-blue transition">Comparisons</Link></li>
          <li><Link href="/about" className="hover:text-blue transition">About</Link></li>
        </ul>
      </div>
      {/* Top Categories */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-white">Top Categories</h4>
        <ul className="space-y-2">
          <li><Link href="/crm-tools" className="hover:text-blue transition">CRM</Link></li>
          <li><Link href="/marketing-automation" className="hover:text-blue transition">Marketing Automation</Link></li>
        </ul>
      </div>
      {/* Legal */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-white">Legal</h4>
        <ul className="space-y-2">
          <li><Link href="/affiliate-disclosure" className="hover:text-blue transition">Affiliate Disclosure</Link></li>
          <li><Link href="/privacy-policy" className="hover:text-blue transition">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-10 text-center text-xs text-offwhite/70">
      &copy; {new Date().getFullYear()} ShelfCue. All rights reserved.
    </div>
  </footer>
);

export default Footer; 