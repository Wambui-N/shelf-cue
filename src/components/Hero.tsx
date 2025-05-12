"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { satoshiBlack } from "@/app/fonts";

const NAVBAR_HEIGHT = "pt-24"; // 96px, adjust if your navbar is taller/shorter

// GlitchButton component
interface GlitchButtonProps {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}
const GlitchButton = ({ text, href, icon, variant = "primary" }: GlitchButtonProps) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-base font-semibold duration-300 transition-all
        ${variant === "primary"
          ? "bg-white/80 text-navy shadow hover:bg-white"
          : "bg-offwhite/70 text-blue hover:bg-white/90 hover:text-navy"}
      `}
    >
      {/* Text Glitch */}
      <div className="relative overflow-hidden">
        <span className="invisible">{text}</span>
        <span
          className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
        >
          {text}
        </span>
        <span
          className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out group-hover:translate-y-0"
        >
          {text}
        </span>
      </div>
      {icon && <span className="relative z-10 flex items-center">{icon}</span>}
    </button>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-offwhite flex items-center justify-center pt-24 py-8 px-2">
      {/* Main hero content, centered */}
      <div className="w-full max-w-3xl flex flex-col items-center justify-center mx-auto p-8 md:p-14">
        {/* Headline */}
        <h1 className={`text-4xl md:text-6xl font-black mb-6 text-navy text-center`}>
          Stop Wasting $10,000+ on CRM Tools That Don't Work
        </h1>
        {/* Subheading */}
        <p className="text-navy/80 text-lg md:text-xl mb-8 font-light text-center whitespace-pre-line">
          We combine hands-on experience with deep AI analysis to reveal:
          {'\n✓ Which tools actually deliver (and which just look good in ads)'}
          {'\n✓ Hidden pricing traps 83% of buyers miss'}
          {'\n✓ The best alternatives for your budget'}
        </p>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center items-center">
          <GlitchButton
            text="See Top Picks"
            href="/crm-tools"
            icon={<ArrowRight className="w-5 h-5 ml-1" />}
            variant="primary"
          />
          <GlitchButton
            text="How We Test Tools"
            href="/methodology"
            variant="secondary"
            icon={undefined}
          />
        </div>
      </div>
      {/* Gradient and shimmer animation styles */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
