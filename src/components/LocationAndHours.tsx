import React, { useState } from 'react';
import { MapPin, Clock, Banknote, Navigation, Phone, ExternalLink, ShieldCheck, CheckCircle2, Car, Store } from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<'centre' | 'ihaddaden' | 'boukhiama'>('centre');

  const routeDescriptions = {
    centre: "Depuis le Centre-Ville de Béjaïa / Place Gueydon : Prenez le Boulevard Krim Belkacem en direction de la Route de Boukhiama. La boutique se situe sur l axe principal avec sa devanture vitrée illuminée.",
    ihaddaden: "Depuis Ihaddaden / Ighil El Bordj : Remontez vers la Route de Boukhiama. Le magasin est facilement accessible à 5-7 minutes de route, stationnement rapide à proximité.",
    boukhiama: "Directement sur la Route de Boukhiama (Code Plus: P2XR+QH7). Repérez nos mannequins en vitrine devant le magasin.",
  };

  return (
    <section id="infos" className="py-16 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE2] border border-[#D4AF37]/30 text-stone-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Localisation Physique & Informations Pratiques</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Rendez-vous en Boutique à Béjaïa
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Notre point de vente physique vous accueille 7 jours sur 7. Essayez sur mannequin, profitez du conseil vestimentaire personnalisé et réalisez vos achats en toute simplicité.
          </p>
        </div>

        {/* Practical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Address & Code Plus */}
          <div className="bg-[#F3EEE8] p-6 rounded-3xl border border-[#E6DFD5] space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                Adresse Exacte
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                Route de Boukhiama, Béjaïa
              </h3>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                Code Google Maps : <strong className="text-stone-900">P2XR+QH7, Béjaïa</strong>. Situé sur l'artère commerçante dynamique de Boukhiama.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=P2XR%2BQH7+Route+de+Boukhiama+B%C3%A9ja%C3%AFa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>Lancer l'Itinéraire Google Maps</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>

          {/* Card 2: Hours & Open Status */}
          <div className="bg-[#F3EEE8] p-6 rounded-3xl border border-[#E6DFD5] space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                  Horaires d'Ouverture
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Ouvert Aujourd'hui
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                7j/7 jusqu'à 21h00
              </h3>
              <ul className="text-stone-600 text-xs mt-3 space-y-1.5">
                <li className="flex justify-between border-b border-stone-200/60 pb-1">
                  <span>Lundi — Dimanche :</span>
                  <span className="font-bold text-stone-900">10h00 – 21h00</span>
                </li>
                <li className="flex justify-between border-b border-stone-200/60 pb-1">
                  <span>Vendredi (Jour Saint) :</span>
                  <span className="font-bold text-stone-900">14h30 – 21h00</span>
                </li>
                <li className="text-[11px] text-stone-500 pt-1 italic">
                  *Achats rapides et conseils en magasin jusqu en soirée.
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-3 rounded-xl border border-stone-200 text-[11px] text-stone-700">
              <strong className="block text-stone-900">Besoin d un renseignement avant de venir ?</strong>
              <span>Appelez-nous au 034 00 00 00 pour vérifier la disponibilité.</span>
            </div>
          </div>

          {/* Card 3: Payment & Conditions */}
          <div className="bg-[#F3EEE8] p-6 rounded-3xl border border-[#E6DFD5] space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center mb-3">
                <Banknote className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                Moyen de Paiement
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                Espèces Uniquement (DZD)
              </h3>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                Afin de garantir un passage fluide et rapide, le paiement s effectue exclusivement en espèces au comptoir du magasin lors de vos achats ou du retrait de réservation.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl space-y-2 text-xs text-emerald-950">
              <div className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Service Click & Reserve Gratuit</span>
              </div>
              <p className="text-[11px] leading-normal">
                Réservez gratuitement sur le site, venez essayer en cabine et réglez sur place en espèces si l article vous convient.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Directions Selector */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] flex items-center gap-2">
                <Car className="w-6 h-6 text-[#D4AF37]" />
                <span>Comment venir à la Boutique ?</span>
              </h3>
              <p className="text-stone-500 text-xs mt-1">
                Itinéraires simples depuis les principaux quartiers de Béjaïa.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRoute('centre')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedRoute === 'centre'
                    ? 'bg-[#1C1917] text-[#FAF7F2]'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Centre-Ville Béjaïa
              </button>
              <button
                onClick={() => setSelectedRoute('ihaddaden')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedRoute === 'ihaddaden'
                    ? 'bg-[#1C1917] text-[#FAF7F2]'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Ihaddaden / Ighil El Bordj
              </button>
              <button
                onClick={() => setSelectedRoute('boukhiama')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedRoute === 'boukhiama'
                    ? 'bg-[#1C1917] text-[#FAF7F2]'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Accès Direct Boukhiama
              </button>
            </div>
          </div>

          <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Store className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <span className="text-xs font-bold text-stone-900 block">Itinéraire suggéré :</span>
                <p className="text-stone-700 text-xs sm:text-sm mt-1 leading-relaxed">
                  {routeDescriptions[selectedRoute]}
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=P2XR%2BQH7+Route+de+Boukhiama+B%C3%A9ja%C3%AFa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors shrink-0 flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Ouvrir GPS</span>
            </a>
          </div>

          {/* Custom Styled Map Graphic representation for Route de Boukhiama */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-stone-300 relative bg-[#E5E0D8] aspect-[21/9] min-h-[200px] flex items-center justify-center p-6 text-center">
            {/* Styled Map Background simulation */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#1C1917_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-stone-300 max-w-lg space-y-3">
              <div className="w-12 h-12 bg-[#1C1917] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-[#D4AF37]">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Boutique Istanbul Béjaïa
              </h4>
              <p className="text-stone-600 text-xs">
                P2XR+QH7, Route de Boukhiama, Béjaïa, Algérie
              </p>
              <div className="flex justify-center gap-2 text-[11px] font-bold text-stone-800">
                <span className="px-3 py-1 bg-stone-100 rounded-lg border border-stone-200">
                  Ouvert jusqu'à 21h00
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200">
                  Espèces Uniquement
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=P2XR%2BQH7+Route+de+Boukhiama+B%C3%A9ja%C3%AFa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1917] hover:text-[#D4AF37] underline pt-1"
              >
                Ouvrir la carte Google Maps complète ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
