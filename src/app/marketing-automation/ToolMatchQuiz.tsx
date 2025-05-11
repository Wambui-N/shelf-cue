"use client";

import { motion } from 'motion/react';

const ToolMatchQuiz = () => (
  <section className="py-16 w-full max-w-xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-navy text-center mb-8"
    >
      Not Sure Which Tool Fits Your Business?
    </motion.h2>
    <form className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 items-center">
      <label className="w-full max-w-xs text-left text-navy font-medium">
        How many email subscribers do you have?
        <select className="block w-full mt-2 rounded-lg border border-offwhite px-3 py-2">
          <option>0-1,000</option>
          <option>1,000-10,000</option>
          <option>10,000+</option>
        </select>
      </label>
      <label className="w-full max-w-xs text-left text-navy font-medium">
        Do you sell physical or digital products?
        <select className="block w-full mt-2 rounded-lg border border-offwhite px-3 py-2">
          <option>Physical</option>
          <option>Digital</option>
          <option>Both</option>
        </select>
      </label>
      <label className="w-full max-w-xs text-left text-navy font-medium">
        What's your monthly budget?
        <select className="block w-full mt-2 rounded-lg border border-offwhite px-3 py-2">
          <option>Under $50</option>
          <option>$50-$200</option>
          <option>$200+</option>
        </select>
      </label>
      <button
        type="submit"
        className="relative overflow-hidden group bg-blue text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition mt-2"
      >
        <span className="relative z-10">Show My Best Match</span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
      </button>
    </form>
  </section>
);

export default ToolMatchQuiz; 