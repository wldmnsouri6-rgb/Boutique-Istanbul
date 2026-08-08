import React from 'react';
import { MANNEQUIN_OUTFITS } from '../data/products';
import { OutfitLook } from '../types';
import { Store, ArrowUpRight, CheckCircle2, Sparkles, MapPin, ShoppingBag } from 'lucide-react';

interface VitrineShowcaseProps {
  onOpenReserveModal: (itemName?: string) => void;
}

export const VitrineShowcase: React.FC<VitrineShowcaseProps> = ({ onOpenReserveModal }) => {
  return (
    <section id="vitrine" className="py-16 bg-[#F3EEE8] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold mb-3 border border-[#D4AF37]/40 shadow-sm">
              <Store className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Tenues Exposées en Vitrine • Magasin Béjaïa</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              Les Looks Mannequins du Moment
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
              Chaque semaine, notre équipe assemble des associations estivales complètes (t-shirts peignés, shorts cargo, joggings légers, chemises de saison et casquettes) directement présentées en vitrine pour vous inspirer.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=P2XR%2BQH7+Route+de+Boukhiama+B%C3%A9ja%C3%AFa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-stone-900 text-xs font-bold border border-stone-300 hover:bg-stone-100 transition-all shrink-0"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Voir la Vitrine en Vrai (Maps)</span>
          </a>
        </div>

        {/* Outfit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MANNEQUIN_OUTFITS.map((look: OutfitLook) => (
            <div
              key={look.id}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E6DFD5] shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute top-4 left-4 bg-[#1C1917]/90 text-[#FAF7F2] backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold border border-[#D4AF37]/40">
                    {look.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                      {look.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                      {look.title}
                    </h3>
                    <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                      {look.description}
                    </p>
                  </div>

                  {/* Composition breakdown */}
                  <div className="space-y-2 pt-2 border-t border-stone-200">
                    <span className="text-xs font-bold text-stone-800 block">
                      Composition du Look :
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {look.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between items-center text-[11px]">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            {item.name}
                          </span>
                          <span className="font-bold text-stone-900">
                            {item.priceDZD.toLocaleString('fr-FR')} DA
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & Action */}
              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] uppercase text-stone-400 block font-bold">Total Tenue Complète</span>
                  <span className="text-lg font-serif font-bold text-[#1C1917]">
                    {look.totalPriceDZD.toLocaleString('fr-FR')} DA
                  </span>
                </div>

                <button
                  onClick={() => onOpenReserveModal(look.title)}
                  className="px-4 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Essayer cette Tenue</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
