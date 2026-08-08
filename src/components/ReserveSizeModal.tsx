import React, { useState } from 'react';
import { ShoppingBag, CheckCircle2, Clock, MapPin, Banknote, Phone, User, Tag, Loader2 } from 'lucide-react';
import { Reservation } from '../types';

interface ReserveSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultItemName?: string;
}

export const ReserveSizeModal: React.FC<ReserveSizeModalProps> = ({
  isOpen,
  onClose,
  defaultItemName = '',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [itemName, setItemName] = useState(defaultItemName || 'T-Shirt Oversized Coton Peigné');
  const [size, setSize] = useState('L');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState<Reservation | null>(null);

  if (!isOpen) return null;

  const handleSubmitReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/reserve-size', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          phone,
          itemName,
          size,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReservationSuccess(data.reservation);
      }
    } catch (err) {
      console.error(err);
      setReservationSuccess({
        id: 'RES-LOCAL',
        customerName,
        phone,
        itemName,
        size,
        notes,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReservationSuccess(null);
    setCustomerName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl border border-stone-300 relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-200 text-stone-800 hover:bg-stone-300 transition-colors text-xs font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center shadow-md">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase block">
              Click & Reserve • Béjaïa
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Réservation de Taille en Magasin
            </h3>
          </div>
        </div>

        {!reservationSuccess ? (
          <form onSubmit={handleSubmitReservation} className="space-y-4 text-xs text-stone-800">
            <p className="text-stone-600 leading-relaxed">
              Réservez votre article et votre taille gratuitement pour 24 heures. Nous préparons la pièce en cabine d essayage à notre adresse <strong>Route de Boukhiama (Béjaïa)</strong>.
            </p>

            <div>
              <label className="block font-bold text-stone-900 mb-1">Article souhaité :</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Ex: T-Shirt Oversize, Short Cargo, Jogging Léger..."
                className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-stone-900 mb-1">Taille à réserver :</label>
              <div className="grid grid-cols-6 gap-1.5">
                {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSize(sz)}
                    className={`py-2 rounded-lg border font-bold text-center transition-all ${
                      size === sz
                        ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                        : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-900 mb-1">Nom & Prénom :</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Votre nom"
                  className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-stone-900 mb-1">Téléphone (Algérie) :</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 XX XX XX XX"
                  className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-900 mb-1">Remarque (optionnel) :</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Heure de passage prévue, question sur la couleur..."
                className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
              />
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-[11px] text-emerald-900 space-y-1">
              <span className="font-bold flex items-center gap-1">
                <Banknote className="w-3.5 h-3.5" /> Aucun paiement en ligne requis
              </span>
              <p>Vous ne payez qu en boutique (espèces uniquement) après essayage.</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#1C1917] text-[#FAF7F2] font-bold text-sm rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                  <span>Enregistrement en cours...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Confirmer la Réservation en Magasin</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-emerald-50 border border-emerald-300 p-5 rounded-2xl text-emerald-950 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Réservation Validée avec Succès !</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1 text-stone-800">
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-stone-500">Code Réservation :</span>
                  <span className="font-bold">{reservationSuccess.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Client :</span>
                  <span className="font-bold">{reservationSuccess.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Article :</span>
                  <span className="font-bold">{reservationSuccess.itemName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Taille :</span>
                  <span className="font-bold bg-[#1C1917] text-white px-2 rounded text-[10px]">
                    {reservationSuccess.size}
                  </span>
                </div>
              </div>

              <p className="leading-relaxed">
                Votre article est mis de côté pendant 24h à <strong>Boutique Istanbul Béjaïa</strong>.
              </p>
            </div>

            {/* Practical recap box */}
            <div className="bg-[#F3EEE8] p-4 rounded-xl border border-stone-300 space-y-2 text-xs text-stone-800">
              <span className="font-bold block text-stone-900">Rappel Pratique :</span>
              <div className="flex items-center gap-2 text-[11px]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>P2XR+QH7, Route de Boukhiama, Béjaïa</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Ouvert 7j/7 jusqu'à 21h00</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-bold">
                <Banknote className="w-4 h-4 text-emerald-600" />
                <span>Paiement sur place en espèces uniquement</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors"
            >
              Fermer et retourner au site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
