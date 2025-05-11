import { Metadata } from 'next';
import Hero from './Hero';
import ComparisonMatrix from './ComparisonMatrix';
import DeepDiveReviews from './DeepDiveReviews';
import ToolMatchQuiz from './ToolMatchQuiz';
import CaseStudy from './CaseStudy';
import RelatedArticles from './RelatedArticles';

export const metadata: Metadata = {
  title: 'Best Marketing Automation Software (2024): Email, Ads & Workflows',
  description: "We tested 15+ tools. Here's the definitive ranking for email marketing, lead nurturing, and revenue automation.",
};

export default function MarketingAutomationPage() {
  return (
    <>
      <Hero />
      <ComparisonMatrix />
      <DeepDiveReviews />
      <ToolMatchQuiz />
      <CaseStudy />
      <RelatedArticles />
    </>
  );
} 