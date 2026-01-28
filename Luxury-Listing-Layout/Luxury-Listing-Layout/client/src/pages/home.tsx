import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Properties from "@/components/home/Properties";
import Features from "@/components/home/Features";
import Location from "@/components/home/Location";
import Gallery from "@/components/home/Gallery";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Properties />
      <Features />
      <Location />
      <Gallery />
      
      {/* Pre-footer CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Ready for your escape?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your stay today and experience the magic of the mountains. Our team is ready to welcome you.
          </p>
          <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 px-8 h-14 text-lg">
            Check Availability
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
