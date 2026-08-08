import React, { useState } from 'react';
import { Sparkles, User, Ruler, Shirt, CheckCircle2, ArrowRight, Loader2, Store, MapPin } from 'lucide-react';
import { StylistRecommendation } from '../types';

interface StylistAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReserve: (itemName?: string) => void;
}

export const StylistAdvisorModal: React.FC<StylistAdvisorModalProps> = ({ isOpen, onClose, onOpenReserve }) => {
  const [occasion, setOccasion] = useState('Sortie d été / Promenade Béjaïa');
  const [stylePreference, setStylePreference] = useState('Casual & Tendance Oversize');
  const [height, setHeight] = useState('178');
  const [weight, setWeight] = useState('75');
  const [bodyType, setBodyType] = useState('Standard / Athlétique');

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<StylistRecommendation | null>(null);

  if (!isOpen) return null;

  const handleSubmitAdvisor = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/style-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          occasion,
          stylePreference,
          height,
          weight,
          bodyType,
        }),
      });

      const data = await res.json();
      setRecommendation({
        recommendation: data.recommendation,
        suggestedItems: data.suggestedItems || [],
        stylistTip: data.stylistTip || '',
      });
    } catch (err) {
      console.error(err);
      setRecommendation({
        recommendation: "Nos conseillers vous recommandent d'associer notre chemise en lin avec le blazer marine ajusté et un chino beige.",
        suggestedItems: ["Chemise Lin Sablé", "Veste Blazer Marine", "Chino Beige Stretch"],
        stylistTip: "Rendez-vous en magasin Route de Boukhiama à Béjaïa pour essayer sans engagement !",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl border border-stone-300 relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-200 text-stone-800 hover:bg-stone-300 transition-colors text-xs font-bold"
        >
          ✕
        </button>

        {/* Modal Title Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase block">
              IA & Expertise Istanbul
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Conseiller Style & Guide de Taille
            </h3>
          </div>
        </div>

        {!recommendation ? (
          <form onSubmit={handleSubmitAdvisor} className="space-y-5 text-xs text-stone-800">
            <p className="text-stone-600 leading-relaxed">
              Indiquez l occasion et vos mensurations. Notre intelligence artificielle, alimentée par l'expertise des stylistes de <strong>Boutique Istanbul Béjaïa</strong>, compose votre tenue sur mesure.
            </p>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-stone-900 mb-1">Occasion :</label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                >
                  <option value="Sortie d été / Promenade Béjaïa">Sortie d été / Promenade Béjaïa</option>
                  <option value="Soirée Décontractée entre Amis">Soirée Décontractée entre Amis</option>
                  <option value="Plage & Détente Estivale">Plage & Détente Estivale</option>
                  <option value="Tenue Quotidienne Confort">Tenue Quotidienne Confort</option>
                  <option value="Garde-Robe Saison Été">Garde-Robe Saison Été</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-900 mb-1">Style recherché :</label>
                <select
                  value={stylePreference}
                  onChange={(e) => setStylePreference(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                >
                  <option value="Moderne & Ajusté">Moderne & Ajusté (Slim Fit)</option>
                  <option value="Chic Italien Raffiné">Chic Italien Raffiné</option>
                  <option value="Décontracté Élégant">Décontracté Élégant (Smart Casual)</option>
                  <option value="Classique Intemporel">Classique Intemporel</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-900 mb-1">Taille (cm) :</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Ex: 178"
                  className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-stone-900 mb-1">Poids (kg) :</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ex: 75"
                  className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-900 mb-1">Morphologie :</label>
              <div className="grid grid-cols-3 gap-2">
                {['Mince / Athlétique', 'Standard', 'Robuste / Large'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setBodyType(type)}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                      bodyType === type
                        ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#1C1917] text-[#FAF7F2] font-bold text-sm rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                  <span>Analyse de votre style en cours...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Générer Ma Recommandation Style & Taille</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#F3EEE8] p-5 rounded-2xl border border-stone-300 space-y-3">
              <span className="text-[10px] font-bold uppercase text-[#D4AF37] tracking-widest block">
                Analyse & Recommandation Personnalisée
              </span>
              <p className="text-stone-800 text-sm leading-relaxed whitespace-pre-line font-serif italic">
                "{recommendation.recommendation}"
              </p>
            </div>

            {/* Suggested Items */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-900 block">Pièces recommandées en boutique :</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {recommendation.suggestedItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-stone-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip Box */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
              <Store className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Conseil Essayage Magasin Béjaïa :</strong>
                <span>{recommendation.stylistTip}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenReserve(recommendation.suggestedItems[0] || 'Tenue Recommandée');
                }}
                className="flex-1 py-3 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Réserver ces pièces pour essayage</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                onClick={() => setRecommendation(null)}
                className="px-4 py-3 bg-stone-200 text-stone-800 text-xs font-bold rounded-xl hover:bg-stone-300 transition-colors"
              >
                Refaire un test
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
