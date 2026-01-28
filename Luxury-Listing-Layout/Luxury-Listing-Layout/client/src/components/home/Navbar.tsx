import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 text-slate-900"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-serif font-bold tracking-tight cursor-pointer">
            Riverbend
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#properties" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Properties
          </a>
          <a href="#features" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Features
          </a>
          <a href="#location" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Location
          </a>
          <a href="#gallery" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Gallery
          </a>
          <Button 
            className={cn(
              "rounded-full px-6 transition-colors",
              isScrolled 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-white text-slate-900 hover:bg-white/90"
            )}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-slate-900 shadow-xl p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top-5">
          <a href="#properties" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Properties</a>
          <a href="#features" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#location" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Location</a>
          <a href="#gallery" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <Button className="w-full rounded-full">Book Now</Button>
        </div>
      )}
    </nav>
  );
}
