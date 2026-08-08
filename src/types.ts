export interface Product {
  id: string;
  name: string;
  category: 'tshirts' | 'shorts' | 'chemises' | 'joggings' | 'ensemble' | 'accessoires';
  categoryLabel: string;
  priceDZD: number;
  originalPriceDZD?: number;
  image: string;
  isVitrine: boolean; // Tag for items currently displayed on store mannequins
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL')[];
  colors: string[];
  description: string;
  fabric: string;
  fit: 'Oversized' | 'Regular Fit' | 'Slim Fit' | 'Relaxed Fit';
  tag?: 'Nouveauté' | 'Best-Seller' | 'Coup de Cœur' | 'Tendance Été';
}

export interface OutfitLook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  items: {
    name: string;
    priceDZD: number;
  }[];
  totalPriceDZD: number;
}

export interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  itemName: string;
  size: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed';
}

export interface StylistRecommendation {
  recommendation: string;
  suggestedItems: string[];
  stylistTip: string;
}
