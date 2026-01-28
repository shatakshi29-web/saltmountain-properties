import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyProps {
  image: string;
  title: string;
  price: string;
  rating: number;
  location: string;
  beds: number;
  baths: number;
  guests: number;
}

const properties: PropertyProps[] = [
  {
    image: "/images/prop-1.png",
    title: "The A-Frame Hideaway",
    price: "$295",
    rating: 4.96,
    location: "Blue Ridge, GA",
    beds: 2,
    baths: 1,
    guests: 4
  },
  {
    image: "/images/prop-2.png",
    title: "Glass House Retreat",
    price: "$450",
    rating: 4.92,
    location: "Asheville, NC",
    beds: 3,
    baths: 2,
    guests: 6
  },
  {
    image: "/images/prop-3.png",
    title: "Rustic River Lodge",
    price: "$380",
    rating: 4.88,
    location: "Gatlinburg, TN",
    beds: 4,
    baths: 3,
    guests: 8
  },
  {
    image: "/images/prop-4.png",
    title: "Modern Creek Villa",
    price: "$520",
    rating: 4.98,
    location: "Boone, NC",
    beds: 5,
    baths: 4,
    guests: 10
  }
];

export default function Properties() {
  return (
    <section id="properties" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Curated Stays</div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900">Featured Properties</h2>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 rounded-full border-slate-300 hover:bg-white hover:text-primary">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((prop, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white font-medium backdrop-blur-sm">
                    Superhost
                  </Badge>
                </div>
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-primary transition-colors">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  {prop.rating}
                </div>
              </div>
              
              <p className="text-slate-500 text-sm mb-2">{prop.location}</p>
              
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-slate-900">{prop.price}</span>
                <span className="text-slate-500 text-sm">/ night</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full gap-2 rounded-full border-slate-300">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
