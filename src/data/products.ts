import { Product, OutfitLook } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'T-Shirt Coton Peigné Premium Oversized',
    category: 'tshirts',
    categoryLabel: 'T-Shirts & Polos',
    priceDZD: 2800,
    originalPriceDZD: 3400,
    image: '/src/assets/images/summer_look_jogging_1786200563317.jpg',
    isVitrine: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir Profond', 'Blanc Pur', 'Beige Sable', 'Vert Sauge'],
    description: 'T-shirt épais 240g en coton peigné respirant, coupe oversized moderne. Le basique indispensable de l été à Béjaïa.',
    fabric: '100% Coton Peigné Bio',
    fit: 'Oversized',
    tag: 'Best-Seller'
  },
  {
    id: 'prod-2',
    name: 'Short Cargo Été Coton Ripstop',
    category: 'shorts',
    categoryLabel: 'Shorts & Bermudas',
    priceDZD: 3800,
    originalPriceDZD: 4500,
    image: '/src/assets/images/summer_look_shorts_1786200551909.jpg',
    isVitrine: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['Khaki Militaire', 'Beige Désert', 'Noir'],
    description: 'Short cargo d été léger avec poches latérales fonctionnelles et taille élastique à cordon ajustable. Idéal pour sorties et plage.',
    fabric: '98% Coton Ripstop, 2% Élastane',
    fit: 'Relaxed Fit',
    tag: 'Tendance Été'
  },
  {
    id: 'prod-3',
    name: 'Chemise Lin Manches Courtes Col Cabana',
    category: 'chemises',
    categoryLabel: 'Chemises d Été',
    priceDZD: 4500,
    originalPriceDZD: 5200,
    image: '/src/assets/images/hero_summer_istanbul_1786200537328.jpg',
    isVitrine: true,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Sable Chaud', 'Blanc Écru', 'Bleu Ciel'],
    description: 'Chemise d été très fluide en lin et coton respirant. Col cubain tendance pour une allure estivale chic et décontractée.',
    fabric: '55% Lin Naturel, 45% Coton',
    fit: 'Regular Fit',
    tag: 'Nouveauté'
  },
  {
    id: 'prod-4',
    name: 'Jogging d Été Molleton Léger & Respirant',
    category: 'joggings',
    categoryLabel: 'Joggings & Pantalons Léger',
    priceDZD: 4200,
    originalPriceDZD: 4800,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=800',
    isVitrine: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['Gris Chine', 'Noir', 'Beige'],
    description: 'Pantalon jogging de saison chaude en french terry ultra doux. Coupe resserrée aux chevilles avec finitions élastiques.',
    fabric: '80% Coton, 20% Polyester Léger',
    fit: 'Regular Fit',
    tag: 'Best-Seller'
  },
  {
    id: 'prod-5',
    name: 'Ensemble Été T-Shirt + Short Assorti',
    category: 'ensemble',
    categoryLabel: 'Ensembles & Duos',
    priceDZD: 5900,
    originalPriceDZD: 6900,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=800',
    isVitrine: false,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Vert Olive', 'Beige Crème', 'Noir Satiné'],
    description: 'Duo estival complet comprenant t-shirt col rond et short molleton assorti avec logo brodé discret. Prêt à porter.',
    fabric: 'Mélange Coton Supérieur',
    fit: 'Relaxed Fit',
    tag: 'Coup de Cœur'
  },
  {
    id: 'prod-6',
    name: 'Polo d Été Maillage Piqué Extensible',
    category: 'tshirts',
    categoryLabel: 'T-Shirts & Polos',
    priceDZD: 3500,
    image: 'https://images.unsplash.com/photo-1625910513413-5fc284bebe11?auto=format&fit=crop&q=80&w=800',
    isVitrine: false,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanc Neige', 'Bleu Marine', 'Terracotta'],
    description: 'Polo manche courte en maille piquée fine avec col boutonné. Coupe ajustée offrant confort et fraîcheur.',
    fabric: '95% Coton Piqué, 5% Élastane',
    fit: 'Slim Fit',
    tag: 'Tendance Été'
  },
  {
    id: 'prod-7',
    name: 'Short Chino Stretch d Été Élégant',
    category: 'shorts',
    categoryLabel: 'Shorts & Bermudas',
    priceDZD: 3600,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800',
    isVitrine: false,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Beige Clair', 'Bleu Nuit', 'Vert Sauge'],
    description: 'Bermuda style chino propre avec revers aux cuisses et poches italiennes. Parfait avec un t-shirt ou une chemise.',
    fabric: '97% Coton Stretch, 3% Élastane',
    fit: 'Regular Fit'
  },
  {
    id: 'prod-8',
    name: 'Chemise Hawaïenne Imprimé Feuillage Été',
    category: 'chemises',
    categoryLabel: 'Chemises d Été',
    priceDZD: 4200,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    isVitrine: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanc & Tropiques', 'Noir & Palmiers'],
    description: 'Chemise à motifs tropicaux discrets en viscose ultra douce et fraîche sur la peau.',
    fabric: '100% Viscose Respirante',
    fit: 'Relaxed Fit',
    tag: 'Nouveauté'
  },
  {
    id: 'prod-9',
    name: 'Pantalon Chino Toile Ultra-Légère d Été',
    category: 'joggings',
    categoryLabel: 'Joggings & Pantalons Léger',
    priceDZD: 4600,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
    isVitrine: false,
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['Beige Sablé', 'Khaki Clair', 'Gris'],
    description: 'Alternative légère aux jeans pour l été. Tissu fin respirant qui laisse circuler l air.',
    fabric: '100% Coton Peigné Léger',
    fit: 'Regular Fit'
  },
  {
    id: 'prod-10',
    name: 'Casquette Coton Brodée + Lunettes de Soleil',
    category: 'accessoires',
    categoryLabel: 'Accessoires Été',
    priceDZD: 2500,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
    isVitrine: false,
    sizes: ['M', 'L'],
    colors: ['Noir', 'Beige', 'Bleu'],
    description: 'Accessoires estivaux indispensables : casquette 100% coton ajustée avec broderie discrète Istanbul.',
    fabric: 'Coton Peigné',
    fit: 'Regular Fit'
  }
];

export const MANNEQUIN_OUTFITS: OutfitLook[] = [
  {
    id: 'look-1',
    title: 'Look Vitrine #1 — "Summer Linen & Short"',
    subtitle: 'En exposition vitrine principale Route de Boukhiama',
    description: 'Une tenue d été légère et tendance combinant une chemise ouverte en lin manche courte sur t-shirt blanc peigné avec un short cargo beige.',
    image: '/src/assets/images/hero_summer_istanbul_1786200537328.jpg',
    badge: 'En Vitrine Aujourd hui',
    items: [
      { name: 'Chemise Lin Manches Courtes Col Cabana', priceDZD: 4500 },
      { name: 'T-Shirt Coton Peigné Blanc', priceDZD: 2800 },
      { name: 'Short Cargo Coton Beige', priceDZD: 3800 },
      { name: 'Lunettes Style Vintage', priceDZD: 1500 }
    ],
    totalPriceDZD: 12600
  },
  {
    id: 'look-2',
    title: 'Look Vitrine #2 — "Streetwear & Jogging Léger"',
    subtitle: 'Affiché sur mannequin central',
    description: 'Pour vos promenades en soirée ou sorties décontractées à Béjaïa. T-shirt oversize noir et pantalon jogging respirant.',
    image: '/src/assets/images/summer_look_jogging_1786200563317.jpg',
    badge: 'Best-Seller Saison',
    items: [
      { name: 'T-Shirt Oversized Coton 240g', priceDZD: 2800 },
      { name: 'Jogging d Été Molleton Léger', priceDZD: 4200 },
      { name: 'Casquette Coton Brodée', priceDZD: 1800 }
    ],
    totalPriceDZD: 8800
  },
  {
    id: 'look-3',
    title: 'Look Vitrine #3 — "Casual Denim & Chemise Motif"',
    subtitle: 'Style Estival Décontracté',
    description: 'Chemise imprimée courte fluide assortie avec un short en denim délavé et ceinturon d été.',
    image: '/src/assets/images/summer_look_shorts_1786200551909.jpg',
    badge: 'Tendance Été',
    items: [
      { name: 'Chemise d Été Imprimé Tropique', priceDZD: 4200 },
      { name: 'Short Chino / Denim Stretch', priceDZD: 3600 },
      { name: 'T-Shirt Basique Col Rond', priceDZD: 2200 }
    ],
    totalPriceDZD: 10000
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'Toute la Collection', icon: 'Sparkles', count: 10 },
  { id: 'tshirts', label: 'T-Shirts & Polos', icon: 'Shirt', count: 3 },
  { id: 'shorts', label: 'Shorts & Bermudas', icon: 'Scissors', count: 3 },
  { id: 'chemises', label: 'Chemises d Été', icon: 'Shirt', count: 2 },
  { id: 'joggings', label: 'Joggings & Bas Léger', icon: 'Layers', count: 2 },
  { id: 'ensemble', label: 'Ensembles & Duos', icon: 'Crown', count: 1 },
  { id: 'accessoires', label: 'Accessoires Été', icon: 'Watch', count: 1 }
];

