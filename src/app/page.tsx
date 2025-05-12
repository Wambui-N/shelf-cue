import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TopTools from '@/components/TopTools';
import HowWeTest from '@/components/HowWeTest';
import BlogPreview from '@/components/BlogPreview';
import EmailOptIn from '@/components/EmailOptIn';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopTools />
      <HowWeTest />
      <BlogPreview />
      <EmailOptIn />
    </main>
  );
}