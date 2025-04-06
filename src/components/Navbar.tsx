
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-walkerblue font-bold text-2xl">Walker Insurance</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-walkerblue font-medium transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-walkerblue font-medium transition-colors">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-walkerblue font-medium transition-colors">
            Services
          </a>
          <a href="#why-us" className="text-gray-700 hover:text-walkerblue font-medium transition-colors">
            Why Us
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-walkerblue font-medium transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-700 hover:text-walkerblue font-medium transition-colors">
            FAQ
          </a>
          <Button className="quote-btn" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get a Quote
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-walkerblue font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-walkerblue font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-walkerblue font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-walkerblue font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Why Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-walkerblue font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" className="text-gray-700 hover:text-walkerblue font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <Button className="quote-btn w-full" onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}>
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
