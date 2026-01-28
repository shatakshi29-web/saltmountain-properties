import { Button } from "@/components/ui/button";

const images = [
  { src: "/images/prop-1.png", alt: "Cabin exterior", label: "Architecture" },
  { src: "/images/gallery-1.png", alt: "Living room", label: "Interiors" },
  { src: "/images/prop-2.png", alt: "Glass house", label: "Design" },
  { src: "/images/gallery-2.png", alt: "Bathroom", label: "Relaxation" },
  { src: "/images/prop-3.png", alt: "Log cabin", label: "Cozy" },
  { src: "/images/prop-4.png", alt: "Riverside", label: "Nature" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Moments</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900">A Glimpse into Paradise</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-lg cursor-zoom-in ${
                idx === 0 || idx === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl tracking-wide border-b border-white/50 pb-1">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8 border-slate-300 text-slate-900 hover:bg-slate-50">
                Follow us on Instagram
            </Button>
        </div>
      </div>
    </section>
  );
}
