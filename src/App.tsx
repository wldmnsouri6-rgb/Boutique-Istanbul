import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { VitrineShowcase } from './components/VitrineShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { LocationAndHours } from './components/LocationAndHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { StylistAdvisorModal } from './components/StylistAdvisorModal';
import { ReserveSizeModal } from './components/ReserveSizeModal';

import { PRODUCTS_DATA } from './data/products';
import { Product } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Favorites persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('boutique_istanbul_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('boutique_istanbul_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Modals state
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [reserveDefaultItem, setReserveDefaultItem] = useState('');

  const handleOpenReserveModal = (itemName?: string) => {
    setReserveDefaultItem(itemName || 'Chemise Lin Sablé Béjaïa');
    setIsReserveOpen(true);
  };

  const handleReserveProduct = (product: Product, size?: string) => {
    const nameWithSize = size ? `${product.name} (Taille ${size})` : product.name;
    setReserveDefaultItem(nameWithSize);
    setIsReserveOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-sans selection:bg-[#D4AF37] selection:text-stone-900">
      {/* Sticky Top Header & Nav */}
      <Navbar
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenReserveModal={handleOpenReserveModal}
        favoritesCount={favorites.length}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Editorial Hero Banner */}
        <Hero
          onExploreCatalog={() => {
            const el = document.getElementById('catalogue');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
          onOpenReserveModal={() => handleOpenReserveModal()}
        />

        {/* Categories Carousel / Filter */}
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('catalogue');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Mannequin Vitrine Showcase (Tenues du Moment) */}
        <VitrineShowcase
          onOpenReserveModal={handleOpenReserveModal}
        />

        {/* Full Interactive Product Catalog */}
        <ProductCatalog
          products={PRODUCTS_DATA}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onReserveProduct={handleReserveProduct}
        />

        {/* Physical Location, Google Maps Itinerary, Hours & Cash Notice */}
        <LocationAndHours />

        {/* Contact Form & Questions */}
        <ContactSection />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* AI Stylist Assistant Modal */}
      <StylistAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onOpenReserve={(item) => handleOpenReserveModal(item)}
      />

      {/* Size Reservation Modal */}
      <ReserveSizeModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        defaultItemName={reserveDefaultItem}
      />
    </div>
  );
}
