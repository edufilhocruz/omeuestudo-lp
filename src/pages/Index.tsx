
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
