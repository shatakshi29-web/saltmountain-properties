import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";

export default function Hero() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight">
          Experience Luxury in Nature
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-md">
          Escape to the wilderness without compromising on comfort. Discover our curated collection of exclusive cabin rentals.
        </p>

        {/* Search Widget */}
        <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-3xl mx-auto animate-in fade-in zoom-in duration-700">
          
          <div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</div>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full text-sm font-medium outline-none text-slate-900 placeholder:text-slate-900" 
              />
            </div>
          </div>

          <div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-slate-400" />
            <div className="text-left w-full">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Dates</div>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-sm font-medium text-slate-900 w-full text-left">
                    {date ? format(date, "MMM d, yyyy") : "Add dates"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex-1 w-full px-6 py-3 flex items-center gap-3">
            <Users className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Guests</div>
              <input 
                type="number" 
                placeholder="Add guests" 
                className="w-full text-sm font-medium outline-none text-slate-900 placeholder:text-slate-900" 
                min={1}
              />
            </div>
          </div>

          <div className="p-2 w-full md:w-auto">
            <Button size="icon" className="w-full md:w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
}
