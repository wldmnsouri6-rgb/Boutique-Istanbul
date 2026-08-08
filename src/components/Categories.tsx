import React from 'react';
import { CATEGORIES_LIST } from '../data/products';
import { Shirt, Layers, Crown, Sparkles, Watch, Scissors, ChevronRight } from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ selectedCategory, onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return <Shirt className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      case 'Watch':
        return <Watch className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const categoryImages: Record<string, string> = {
    all: '/src/assets/images/hero_summer_istanbul_1786200537328.jpg',
    tshirts: '/src/assets/images/summer_look_jogging_1786200563317.jpg',
    shorts: '/src/assets/images/summer_look_shorts_1786200551909.jpg',
    chemises: '/src/assets/images/hero_summer_istanbul_1786200537328.jpg',
    joggings: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=400',
    ensemble: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=400',
    accessoires: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400',
  };

  return (
    <section className="py-12 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-stone-500 uppercase block mb-1">
            Explorer Notre Offre Homme
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Parcourir par Catégorie
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Sélectionnez une catégorie pour filtrer le catalogue disponible en magasin à Béjaïa.
          </p>
        </div>

        {/* Circular / Card Category Buttons Grid (Matching Reference Image Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES_LIST.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col items-center p-4 rounded-2xl transition-all border text-center ${
                  isSelected
                    ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917] shadow-lg scale-105'
                    : 'bg-[#F3EEE8] text-stone-800 border-[#E6DFD5] hover:bg-stone-200/80 hover:border-stone-400'
                }`}
              >
                {/* Circular Thumbnail Frame */}
                <div className={`w-16 h-16 rounded-full overflow-hidden mb-3 border-2 transition-transform duration-300 group-hover:scale-110 ${
                  isSelected ? 'border-[#D4AF37]' : 'border-white'
                }`}>
                  <img
                    src={categoryImages[cat.id] || categoryImages.all}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <span className={`text-xs font-bold block ${isSelected ? 'text-[#FAF7F2]' : 'text-stone-900'}`}>
                  {cat.label}
                </span>

                <span className={`text-[10px] mt-0.5 block ${isSelected ? 'text-[#D4AF37]' : 'text-stone-500'}`}>
                  {cat.count} pièces
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
