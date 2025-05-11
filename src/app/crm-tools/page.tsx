import { Metadata } from 'next';
import CrmToolsHero from './CrmToolsHero';
import ComparisonTable from './ComparisonTable';
import InDepthReviews from './InDepthReviews';
import LeadCapture from './LeadCapture';
import FAQSection from './FAQSection';
import RelatedContent from './RelatedContent';

export const metadata: Metadata = {
  title: 'Best CRM Software in 2024 (Expert-Tested & Ranked)',
  description: 'We tested 12+ CRMs. Here are the top picks for small businesses, enterprises, and sales teams—with hidden flaws revealed.'
};

export default function CrmToolsPage() {
  return (
    <main className="min-h-screen">
      <CrmToolsHero />
      <ComparisonTable />
      <InDepthReviews />
      <LeadCapture />
      <FAQSection />
      <RelatedContent />
    </main>
  );
} 