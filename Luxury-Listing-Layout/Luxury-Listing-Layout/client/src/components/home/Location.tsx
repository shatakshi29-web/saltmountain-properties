import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/prop-2.png')" }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-secondary font-bold tracking-widest text-xs uppercase mb-3">Our Location</div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Nestled in the Heart of the Blue Ridge</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
              Our main office and welcome center is located in Asheville, NC, serving the surrounding mountain communities. All our cabins are within a 45-minute scenic drive.
            </p>
            
            <div className="space-y-2 mb-8 text-slate-300">
              <p>123 Mountain View Drive</p>
              <p>Asheville, NC 28801</p>
              <p>+1 (828) 555-0123</p>
            </div>

            <div className="flex gap-4">
              <Button className="rounded-full px-8 bg-white text-slate-900 hover:bg-white/90">
                Get Directions
              </Button>
              <Button variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-800 flex items-center justify-center border border-white/10">
             {/* Abstract Map Representation */}
             <div className="text-center p-8">
               <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <p className="text-slate-400">Map Integration Would Go Here</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
