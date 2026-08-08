import React, { useState } from 'react';
import { MapPin, Clock, Banknote, Phone, ChevronDown, ChevronUp, Store, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Comment effectuer un achat chez Boutique Istanbul Béjaïa ?",
      a: "Tous les achats s effectuent directement dans notre magasin physique Route de Boukhiama à Béjaïa. Vous pouvez repérer les tenues sur le site, réserver votre taille, puis essayer et régler en espèces sur place."
    },
    {
      q: "Quels sont les moyens de paiement acceptés ?",
      a: "Le paiement se fait uniquement en espèces (Dinars Algériens DZD) lors de votre passage au comptoir en boutique."
    },
    {
      q: "Quels sont vos horaires d ouverture ?",
      a: "Nous sommes ouverts 7 jours sur 7 de 10h00 jusqu'à 21h00 non-stop (ouverture à 14h30 le vendredi). Ideal pour passer essayer vos vêtements même après le travail."
    },
    {
      q: "Puis-je réserver une taille avant de me déplacer ?",
      a: "Oui ! Utilisez le bouton 'Réserver une Taille' sur n importe quel produit. Votre article sera mis de côté en cabine pendant 24 heures."
    }
  ];

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#1C1917] flex items-center justify-center font-serif text-xl font-bold border border-[#D4AF37]">
                I
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-[#FAF7F2] uppercase">
                  Boutique Istanbul
                </span>
                <span className="block text-[10px] tracking-widest text-[#D4AF37] font-bold uppercase">
                  Béjaïa • Vêtements Hommes
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Votre destination mode masculine décontractée à Béjaïa. Une sélection soignée de t-shirts coton peigné oversize, shorts cargo & chino, joggings légers et chemises d'été. Devanture vitrée avec mannequins sur la Route de Boukhiama.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>P2XR+QH7, Route de Boukhiama, Béjaïa, Algérie</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Ouvert 7j/7 jusqu'à 21h00</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Banknote className="w-4 h-4" />
                <span>Paiement espèces uniquement sur place</span>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase block mb-3">
              Questions Fréquentes (FAQ Clients)
            </span>

            <div className="space-y-2">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-stone-900/80 rounded-xl border border-stone-800 overflow-hidden text-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-3.5 text-left font-bold text-stone-200 hover:text-[#D4AF37] flex items-center justify-between transition-colors"
                    >
                      <span>{item.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                    </button>
                    {isOpen && (
                      <div className="px-3.5 pb-3.5 text-stone-400 leading-relaxed border-t border-stone-800/60 pt-2">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Boutique Istanbul Béjaïa. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#accueil" className="hover:text-stone-300">Accueil</a>
            <span>•</span>
            <a href="#vitrine" className="hover:text-stone-300">Tenues Vitrine</a>
            <span>•</span>
            <a href="#catalogue" className="hover:text-stone-300">Catalogue & Tailles</a>
            <span>•</span>
            <a href="#infos" className="hover:text-stone-300">Itinéraire Maps</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
