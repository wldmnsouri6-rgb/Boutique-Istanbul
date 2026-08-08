import React from 'react';
import { MapPin, Clock, ArrowRight, Sparkles, CheckCircle2, Store, Banknote, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenAdvisor: () => void;
  onOpenReserveModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenAdvisor, onOpenReserveModal }) => {
  return (
    <section id="accueil" className="relative bg-[#FAF7F2] pt-8 pb-16 overflow-hidden border-b border-[#E6DFD5]">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE2] border border-[#D4AF37]/30 text-stone-800 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Boutique Hommes • Collection Été Décontractée</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] tracking-tight">
              Mode Estivale & Style Casual. <br />
              <span className="italic font-normal text-stone-600">T-shirts, Shorts & Joggings à Béjaïa.</span>
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              T-shirts coton peigné oversize, shorts cargo & chino, joggings légers et chemises en lin manche courte. 
              Venez découvrir nos tenues estivales en vitrine sur la <strong className="text-stone-900">Route de Boukhiama</strong>.
            </p>

            {/* Practical highlights summary card */}
            <div className="bg-[#F3EEE8] border border-[#E6DFD5] p-4 rounded-xl grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <Store className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Vitrine Mannequins</span>
                  <span className="text-stone-600 text-[11px]">Tenues du moment</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Ouvert jusqu'à 21h</span>
                  <span className="text-stone-600 text-[11px]">7 jours sur 7</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2">
                <Banknote className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Paiement Espèces</span>
                  <span className="text-stone-600 text-[11px]">Achats rapides sur place</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 rounded-full bg-[#1C1917] text-[#FAF7F2] font-semibold text-sm hover:bg-stone-800 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Découvrir la Collection</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href="https://maps.google.com/?q=P2XR%2BQH7+Route+de+Boukhiama+B%C3%A9ja%C3%AFa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#F3EEE8] text-stone-900 font-semibold text-sm hover:bg-stone-200 transition-all border border-stone-300 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Venir en Boutique (Itinéraire)</span>
              </a>

              <button
                onClick={onOpenAdvisor}
                className="px-4 py-3.5 rounded-full bg-white text-stone-800 font-medium text-xs hover:bg-stone-100 transition-all border border-stone-200 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Conseil Taille AI</span>
              </button>
            </div>

            {/* Local Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-stone-500 text-xs border-t border-stone-200">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Vêtements Qualité Importée
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Essayage Gratuit en Magasin
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Réservation de Taille 24h
              </span>
            </div>
          </div>

          {/* Right Column: Hero Fashion Imagery Collage (Editorial Look) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200">
                <img
                  src="/src/assets/images/hero_summer_istanbul_1786200537328.jpg"
                  alt="Boutique Istanbul Béjaïa Collection Été"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#1C1917]/90 text-[#FAF7F2] backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border border-[#D4AF37]/40 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Look Vitrine Été • Route de Boukhiama</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200 shadow-xl flex items-center justify-between">
                  <div className="pl-2">
                    <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Look Phare Été
                    </span>
                    <span className="block text-sm font-serif font-bold text-stone-900 pl-1.5">
                      Chemise Lin, T-Shirt & Short Cargo
                    </span>
                    <span className="block text-xs font-bold text-[#1C1917] pl-1.5">
                      Disponibles en S à 3XL en magasin
                    </span>
                  </div>
                  <button
                    onClick={onOpenReserveModal}
                    className="px-3 py-2 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Réserver
                  </button>
                </div>
              </div>

              {/* Secondary Floating Thumbnail */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 w-44 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-square bg-stone-100">
                <img
                  src="/src/assets/images/summer_look_shorts_1786200551909.jpg"
                  alt="Shorts et chemises d été"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
