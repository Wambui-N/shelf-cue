import { Metadata } from 'next';
import Hero from './Hero';
import QuickAnswer from './QuickAnswer';
import HeadToHead from './HeadToHead';
import WhoShouldChoose from './WhoShouldChoose';
import Alternatives from './Alternatives';
import FinalRecommendation from './FinalRecommendation';

export const metadata: Metadata = {
  title: 'HubSpot vs. ActiveCampaign (2024): Brutally Honest Comparison',
  description: "We spent 3 months testing both platforms. Here's which one actually delivers better ROI for your business size.",
};

export default function HubspotVsActivecampaignPage() {
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