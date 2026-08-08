import React, { useState } from 'react';
import { MapPin, Clock, Phone, Sparkles, Bookmark, ShoppingBag, Menu, X, Banknote, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAdvisor: () => void;
  onOpenReserveModal: (itemName?: string) => void;
  favoritesCount: number;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdvisor,
  onOpenReserveModal,
  favoritesCount,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'vitrine', label: 'Tenues en Vitrine' },
    { id: 'catalogue', label: 'Catalogue & Tailles' },
    { id: 'styliste', label: 'Conseil Style AI' },
    { id: 'infos', label: 'Accès & Horaires' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DFD5] transition-all">
      {/* Top Banner with Key Practical Details */}
      <div className="bg-[#1C1917] text-[#FAF7F2] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium">
              <MapPin className="w-3.5 h-3.5" /> P2XR+QH7, Rte de Boukhiama, Béjaïa
            </span>
            <span className="hidden md:inline text-stone-400">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Ouvert 7j/7 jusqu'à 21h00
            </span>
            <span className="hidden lg:inline text-stone-400">•</span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-medium">
              <Banknote className="w-3.5 h-3.5" /> Paiement en espèces sur place
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="https://maps.google.com/?q=P2XR%2BQH7+Route+de+Boukhiama+B%C3%A9ja%C3%AFa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
            >
              Google Maps <span className="text-[10px]">↗</span>
            </a>
            <span className="text-stone-500">|</span>
            <a href="tel:+21334000000" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> Contact Boutique
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('accueil')}>
          <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#D4AF37] flex items-center justify-center font-serif text-xl font-bold shadow-sm border border-[#D4AF37]/30">
            I
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] uppercase">
              Boutique Istanbul
            </span>
            <span className="block text-[10px] tracking-widest text-stone-500 font-medium uppercase">
              Béjaïa • Hommes & Élégance
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 pr-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors hover:text-[#1C1917] relative py-1 whitespace-nowrap ${
                activeSection === link.id ? 'text-[#1C1917] font-semibold' : 'text-stone-600'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1C1917] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* AI Stylist Button */}
          <button
            onClick={onOpenAdvisor}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-stone-200/70 text-[#1C1917] hover:bg-stone-300 transition-all border border-stone-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Styliste AI</span>
          </button>

          {/* Reserve Size Button */}
          <button
            onClick={() => onOpenReserveModal()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#1C1917] text-[#FAF7F2] hover:bg-stone-800 transition-all shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Réserver une Taille</span>
          </button>

          {/* Favorites Counter */}
          {favoritesCount > 0 && (
            <button
              onClick={() => handleNavClick('catalogue')}
              className="relative p-2 rounded-full hover:bg-stone-200/60 text-stone-800 transition-all"
              title="Vos coups de cœur"
            >
              <Bookmark className="w-4 h-4 fill-stone-800" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-stone-900 font-bold text-[10px] rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-200/60"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E6DFD5] px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 text-sm font-medium rounded-lg ${
                  activeSection === link.id
                    ? 'bg-[#1C1917] text-[#FAF7F2]'
                    : 'text-stone-700 hover:bg-stone-200/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-300 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-stone-200 text-[#1C1917]"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Consulter notre Styliste AI</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserveModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#1C1917] text-[#FAF7F2]"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Réserver une taille pour essayage</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
