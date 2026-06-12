import { motion } from 'motion/react';
import { Menu, X, PlaneTakeoff, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919795065443';
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sbi-blue rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl shadow-md">
              <PlaneTakeoff size={24} />
            </div>
            <span className="font-heading font-extrabold text-2xl text-sbi-dark tracking-tight uppercase">
              Insure<span className="text-sbi-amber">Pilot</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-sbi-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 bg-sbi-dark text-white hover:bg-sbi-blue px-6 py-2 rounded-full font-bold shadow-md transition-all active:scale-95"
            >
              <Phone size={18} />
              Call Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-medium py-2 px-4 hover:bg-sbi-accent rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2 bg-sbi-dark text-white mx-4 mt-2 py-3 rounded-2xl font-bold shadow-md active:scale-95 transition-transform"
          >
            <Phone size={18} />
            Call Now: +91 97950 65443
          </button>
        </div>
      </motion.div>
    </header>
  );
}
