import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-white': '#F6F6F1',
        'muted-charcoal': '#4A4A4A',
        'blush-pink': '#F7C8C8',
        'deep-charcoal': '#333333',
      },
      fontFamily: {
        sans: [
          'var(--font-satoshi-regular)',
          'var(--font-satoshi-light)',
          'var(--font-satoshi-medium)',
          'var(--font-satoshi-bold)',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
