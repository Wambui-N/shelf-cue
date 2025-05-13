"use client";

import { motion } from 'motion/react';
import { useState } from 'react';

const ToolMatchQuiz = () => {
  const [formData, setFormData] = useState({
    subscribers: '',
    productType: '',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState('');
  const [errors, setErrors] = useState({
    subscribers: false,
    productType: false,
    budget: false
  });

  const getRecommendation = () => {
    const { subscribers, productType, budget } = formData;

    // Small Lists (0-1,000 subs)
    if (subscribers === '0-1,000') {
      if (productType === 'Physical') {
        if (budget === 'Under $50') return 'Zoho CRM (Free)';
        if (budget === '$50-$200') return 'ActiveCampaign';
        if (budget === '$200+') return 'HubSpot Starter';
      }
      if (productType === 'Digital') {
        if (budget === 'Under $50') return 'ConvertKit (Free)';
        if (budget === '$50-$200') return 'Kajabi Starter';
        if (budget === '$200+') return 'Kajabi Growth';
      }
      if (productType === 'B2B') {
        if (budget === 'Under $50') return 'HubSpot Free Tools';
        if (budget === '$50-$200') return 'Close Starter';
        if (budget === '$200+') return 'Salesforce Essentials';
      }
    }

    // Mid Lists (1,001-10,000 subs)
    if (subscribers === '1,000-10,000') {
      if (productType === 'Physical') {
        if (budget === 'Under $50' || budget === '$50-$200') return 'ActiveCampaign';
        if (budget === '$200+') return 'HubSpot Professional';
      }
      if (productType === 'Digital') {
        if (budget === 'Under $50' || budget === '$50-$200') return 'Kajabi Basic';
        if (budget === '$200+') return 'Kajabi Pro';
      }
      if (productType === 'B2B') {
        if (budget === 'Under $50' || budget === '$50-$200') return 'Close Starter';
        if (budget === '$200+') return 'Salesforce Sales Cloud';
      }
    }

    // Large Lists (10,000+ subs)
    if (subscribers === '10,000+') {
      if (productType === 'Physical') {
        if (budget === 'Under $50' || budget === '$50-$200') return 'ActiveCampaign Plus';
        if (budget === '$200+') return 'HubSpot Enterprise';
      }
      if (productType === 'Digital') {
        if (budget === 'Under $50' || budget === '$50-$200') return 'Kajabi Pro';
        if (budget === '$200+') return 'Kajabi Enterprise + Zapier';
      }
      if (productType === 'B2B') {
        if (budget === 'Under $50' || budget === '$50-$200') return 'Salesforce Pardot';
        if (budget === '$200+') return 'Salesforce Unlimited';
      }
    }

    return 'Based on your selections, we recommend starting with a basic CRM solution and scaling up as your business grows.';
  };

  const validateForm = () => {
    const newErrors = {
      subscribers: !formData.subscribers,
      productType: !formData.productType,
      budget: !formData.budget
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setRecommendation(getRecommendation());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user makes a selection
    setErrors(prev => ({
      ...prev,
      [name]: false
    }));
  };

  return (
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
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 items-center">
        <div className="w-full max-w-xs">
          <label className="text-left text-navy font-medium block">
            How many email subscribers do you have?
            <select 
              name="subscribers"
              value={formData.subscribers}
              onChange={handleChange}
              className={`block w-full mt-2 rounded-lg border px-3 py-2 ${
                errors.subscribers ? 'border-red-500' : 'border-offwhite'
              }`}
            >
              <option value="">Select subscriber count...</option>
              <option value="0-1,000">0-1,000</option>
              <option value="1,000-10,000">1,000-10,000</option>
              <option value="10,000+">10,000+</option>
            </select>
            {errors.subscribers && (
              <span className="text-red-500 text-sm mt-1 block">Please select your subscriber count</span>
            )}
          </label>
        </div>

        <div className="w-full max-w-xs">
          <label className="text-left text-navy font-medium block">
            Do you sell physical or digital products?
            <select 
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className={`block w-full mt-2 rounded-lg border px-3 py-2 ${
                errors.productType ? 'border-red-500' : 'border-offwhite'
              }`}
            >
              <option value="">Select product type...</option>
              <option value="Physical">Physical</option>
              <option value="Digital">Digital</option>
              <option value="B2B">B2B</option>
              <option value="Both">Both</option>
            </select>
            {errors.productType && (
              <span className="text-red-500 text-sm mt-1 block">Please select your product type</span>
            )}
          </label>
        </div>

        <div className="w-full max-w-xs">
          <label className="text-left text-navy font-medium block">
            What's your monthly budget?
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`block w-full mt-2 rounded-lg border px-3 py-2 ${
                errors.budget ? 'border-red-500' : 'border-offwhite'
              }`}
            >
              <option value="">Select budget range...</option>
              <option value="Under $50">Under $50</option>
              <option value="$50-$200">$50-$200</option>
              <option value="$200+">$200+</option>
            </select>
            {errors.budget && (
              <span className="text-red-500 text-sm mt-1 block">Please select your budget range</span>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="relative overflow-hidden group bg-blue text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-blue/90 transition mt-2"
        >
          <span className="relative z-10">Show My Best Match</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none" />
        </button>
      </form>
      
      {recommendation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-white rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-navy mb-2">Your Recommended Tool:</h3>
          <p className="text-gray-700">{recommendation}</p>
        </motion.div>
      )}
    </section>
  );
};

export default ToolMatchQuiz; 