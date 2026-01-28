import { Wifi, Trees, Coffee } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Trees className="w-8 h-8 text-primary" />,
      title: "Secluded Locations",
      description: "Every property is hand-picked for privacy and immersion in nature."
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary" />,
      title: "Modern Amenities",
      description: "High-speed internet, smart home features, and premium appliances."
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Concierge Service",
      description: "From grocery stocking to guided tours, we handle the details."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
