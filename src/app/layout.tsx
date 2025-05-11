import type { Metadata } from 'next';
import { satoshiLight, satoshiRegular, satoshiMedium, satoshiBold } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ShelfCue - Best CRM & Marketing Automation Tools Reviews',
  description: 'Find the best CRM and marketing automation tools for your business. Expert reviews, comparisons, and guides to help you make informed decisions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshiLight.variable} ${satoshiRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
