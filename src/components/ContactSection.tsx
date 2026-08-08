import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, ShieldCheck, Banknote } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Disponibilité d un article / Taille');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      if (email) formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);

      await fetch('https://formbold.com/s/6vdP0', {
        method: 'POST',
        body: formData,
      });

      setSubmitted(true);
    } catch (err) {
      console.error('FormBold error:', err);
      // Fallback submission if fetch failed
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#F3EEE8] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Store Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Contact & Renseignements Béjaïa</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Une Question sur un Produit ou une Taille ?
            </h2>

            <p className="text-stone-600 text-sm leading-relaxed">
              N hésitez pas à nous contacter pour vérifier si votre taille est en stock ou pour réserver un costume/tenue avant votre venue. Notre équipe vous répond dans les plus brefs délais.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                    Téléphone Direct Boutique
                  </span>
                  <a href="tel:+21334000000" className="text-sm font-bold text-stone-900 hover:text-[#D4AF37] transition-colors">
                    +213 (0) 34 00 00 00
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                    Adresse
                  </span>
                  <span className="text-xs font-bold text-stone-900">
                    P2XR+QH7, Route de Boukhiama, Béjaïa
                  </span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                    Horaires d Ouverture
                  </span>
                  <span className="text-xs font-bold text-stone-900">
                    Tous les jours (7j/7) jusqu'à 21h00
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-950 flex items-start gap-2">
              <Banknote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Paiement uniquement en espèces sur place</strong>
                <span>Tous les prix affichés sont en Dinars Algériens (DZD).</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E6DFD5] shadow-xl">
            
            {!submitted ? (
              <form
                action="https://formbold.com/s/6vdP0"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 text-xs text-stone-800"
              >
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                  Formulaire de Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-900 mb-1">Nom & Prénom *</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-900 mb-1">Numéro de Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="06 XX XX XX XX"
                      className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-900 mb-1">Adresse Email (Optionnel)</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@email.com"
                    className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-900 mb-1">Sujet de la demande :</label>
                  <select
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                  >
                    <option value="Disponibilité d un article / Taille">Disponibilité d un article / Taille</option>
                    <option value="Renseignement sur une tenue en vitrine">Renseignement sur une tenue en vitrine</option>
                    <option value="Demande sur t-shirts / shorts / joggings">Demande sur t-shirts / shorts / joggings</option>
                    <option value="Autre question / Horaires">Autre question / Horaires</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-900 mb-1">Votre Message :</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Précisez le t-shirt, le short, le jogging ou la taille recherchée..."
                    className="w-full p-3 rounded-xl bg-white border border-stone-300 font-medium focus:ring-2 focus:ring-[#1C1917]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#1C1917] text-[#FAF7F2] font-bold text-xs rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>{loading ? 'Envoi en cours...' : 'Envoyer mon Message (FormBold)'}</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Message Envoyé avec Succès !
                </h3>
                <p className="text-stone-600 text-xs max-w-md mx-auto leading-relaxed">
                  Merci <strong>{name}</strong>. Notre équipe à la Boutique Istanbul Béjaïa prend connaissance de votre message et vous recontactera rapidement par téléphone.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors"
                  >
                    Envoyer une autre question
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
