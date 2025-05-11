import { Metadata } from 'next';
import Hero from './Hero';
import QuickAnswer from './QuickAnswer';
import HeadToHead from './HeadToHead';
import WhoShouldChoose from './WhoShouldChoose';
import Alternatives from './Alternatives';
import FinalRecommendation from './FinalRecommendation';

export const metadata: Metadata = {
  title: 'Kajabi vs. Teachable (2024): Brutally Honest Comparison',
  description: "Kajabi vs. Teachable: Which online course platform is best for your business? See our hands-on verdict, pricing, and features compared.",
};

export default function KajabiVsTeachablePage() {
  return (
    <>
      <Hero />
      <QuickAnswer />
      <HeadToHead />
      <WhoShouldChoose />
      <Alternatives />
      <FinalRecommendation />
    </>
  );
} 