import React, { useState } from 'react';
import { Product } from '../types';
import { Search, Filter, Bookmark, ShoppingBag, Eye, Sparkles, Check, Info, Store } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  onReserveProduct: (product: Product, size?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  favorites,
  onToggleFavorite,
  onReserveProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [onlyVitrine, setOnlyVitrine] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [selectedSizeForModal, setSelectedSizeForModal] = useState<string>('');

  const sizesList = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];

  // Filtering Logic
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.fabric.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = sizeFilter === 'all' || p.sizes.includes(sizeFilter as any);
    const matchesVitrine = !onlyVitrine || p.isVitrine;

    return matchesCategory && matchesSearch && matchesSize && matchesVitrine;
  });

  return (
    <section id="catalogue" className="py-14 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold mb-2">
              <Store className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Stock & Tailles Disponibles en Magasin</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Notre Collection Homme
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Consultez nos articles disponibles à Béjaïa. Réservez votre taille sans aucun frais pour venir essayer sur place.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span>{filteredProducts.length} articles affichés</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F3EEE8] p-4 rounded-2xl border border-[#E6DFD5] mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un t-shirt, short, jogging, chemise d'été, taille..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-stone-900 placeholder-stone-400 text-xs border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1C1917]"
              />
            </div>

            {/* Size Filter */}
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="text-xs font-semibold text-stone-700 whitespace-nowrap flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#D4AF37]" /> Taille :
              </span>
              <button
                onClick={() => setSizeFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  sizeFilter === 'all'
                    ? 'bg-[#1C1917] text-[#FAF7F2]'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                Toutes
              </button>
              {sizesList.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSizeFilter(sz)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    sizeFilter === sz
                      ? 'bg-[#1C1917] text-[#FAF7F2]'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* En Vitrine Toggle */}
            <button
              onClick={() => setOnlyVitrine(!onlyVitrine)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                onlyVitrine
                  ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                  : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-100'
              }`}
            >
              <Store className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>En Vitrine Uniquement</span>
            </button>

          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-md mx-auto">
            <Info className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-stone-900">Aucun produit ne correspond</h3>
            <p className="text-stone-500 text-xs mt-1">
              Essayez de modifier votre recherche ou réinitialisez les filtres de taille.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSizeFilter('all');
                setOnlyVitrine(false);
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#1C1917] text-white text-xs font-medium rounded-lg"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => {
              const isFav = favorites.includes(p.id);

              return (
                <div
                  key={p.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E6DFD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer" onClick={() => setSelectedProductDetail(p)}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Tag Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      {p.isVitrine && (
                        <span className="bg-[#1C1917]/90 text-[#FAF7F2] text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm border border-[#D4AF37]/40 flex items-center gap-1">
                          <Store className="w-3 h-3 text-[#D4AF37]" /> En Vitrine
                        </span>
                      )}
                      {p.tag && (
                        <span className="bg-[#D4AF37] text-stone-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase">
                          {p.tag}
                        </span>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(p.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-stone-800 hover:bg-white transition-all shadow-md"
                      title="Ajouter aux favoris"
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-600 text-amber-600' : 'text-stone-700'}`} />
                    </button>

                    {/* Quick Eye Detail Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProductDetail(p);
                      }}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-stone-900 text-xs font-semibold shadow-lg flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> Aperçu rapide
                    </button>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-stone-400 uppercase block">
                        {p.categoryLabel} • {p.fit}
                      </span>
                      <h3
                        onClick={() => setSelectedProductDetail(p)}
                        className="font-serif text-base font-bold text-stone-900 line-clamp-1 cursor-pointer hover:text-[#D4AF37] transition-colors"
                      >
                        {p.name}
                      </h3>
                      <p className="text-stone-500 text-xs line-clamp-2 mt-1 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    {/* Sizes Available */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-medium text-stone-500 block">Tailles en stock :</span>
                      <div className="flex flex-wrap gap-1">
                        {p.sizes.map((sz) => (
                          <span
                            key={sz}
                            className="px-2 py-0.5 bg-stone-100 text-stone-800 text-[10px] font-bold rounded border border-stone-200"
                          >
                            {sz}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base font-serif font-bold text-[#1C1917]">
                            {p.priceDZD.toLocaleString('fr-FR')} DA
                          </span>
                          {p.originalPriceDZD && (
                            <span className="text-xs text-stone-400 line-through">
                              {p.originalPriceDZD.toLocaleString('fr-FR')} DA
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-emerald-700 font-medium">
                          Paiement espèces en boutique
                        </span>
                      </div>

                      <button
                        onClick={() => onReserveProduct(p)}
                        className="px-3.5 py-2 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Réserver</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detail Modal */}
        {selectedProductDetail && (
          <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl border border-stone-300 relative animate-in fade-in zoom-in-95 duration-200">
              
              <button
                onClick={() => setSelectedProductDetail(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-200 text-stone-800 hover:bg-stone-300 transition-colors font-bold text-xs"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-200 border border-stone-300">
                  <img
                    src={selectedProductDetail.image}
                    alt={selectedProductDetail.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">
                      {selectedProductDetail.categoryLabel}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                      {selectedProductDetail.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-2xl font-serif font-bold text-[#1C1917]">
                        {selectedProductDetail.priceDZD.toLocaleString('fr-FR')} DA
                      </span>
                      {selectedProductDetail.originalPriceDZD && (
                        <span className="text-sm text-stone-400 line-through">
                          {selectedProductDetail.originalPriceDZD.toLocaleString('fr-FR')} DA
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed">
                    {selectedProductDetail.description}
                  </p>

                  <div className="bg-[#F3EEE8] p-3 rounded-xl space-y-1.5 text-xs text-stone-800 border border-stone-200">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Matière :</span>
                      <span className="font-semibold">{selectedProductDetail.fabric}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Coupe :</span>
                      <span className="font-semibold">{selectedProductDetail.fit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">État vitrine :</span>
                      <span className="font-semibold text-emerald-700">
                        {selectedProductDetail.isVitrine ? 'Exposé en Vitrine Mannequin' : 'En Stock Magasin'}
                      </span>
                    </div>
                  </div>

                  {/* Choose size */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-800 block">
                      Sélectionnez votre taille pour la réservation :
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProductDetail.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSizeForModal(sz)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedSizeForModal === sz
                              ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                              : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-100'
                          }`}
                        >
                          Taille {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        const szToUse = selectedSizeForModal || selectedProductDetail.sizes[0];
                        onReserveProduct(selectedProductDetail, szToUse);
                        setSelectedProductDetail(null);
                      }}
                      className="w-full py-3 bg-[#1C1917] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                      <span>Réserver en taille {selectedSizeForModal || selectedProductDetail.sizes[0]}</span>
                    </button>

                    <p className="text-[10px] text-center text-stone-500">
                      📍 Retrait et paiement en espèces en boutique Route de Boukhiama, Béjaïa.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
