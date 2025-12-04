"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuData } from '../data/menuData'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drinks'>('all');
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');
  
  const [favorites, setFavorites] = useState<number[]>([]);

  // atur favorites dari local storage 
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('menuFavorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  // Filter berdasarkan category
  let filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);
  
  if (searchQuery) {
    filteredItems = filteredItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortBy !== 'default') {
    filteredItems = [...filteredItems].sort((a, b) => {
      switch(sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
  }

  // favorite button (sync ke local storage)
  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id) 
      ? favorites.filter(fav => fav !== id) 
      : [...favorites, id];
    
    setFavorites(updatedFavorites);
    localStorage.setItem('menuFavorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--cream)] font-playfair selection:bg-[var(--gold)] selection:text-[var(--red-dark)]">
      
      <Navbar />

      {/* floating home button */}
      <Link href="/">
        <button className="fixed top-35 left-6 z-50 flex items-center gap-2 bg-[var(--white)] hover:bg-[var(--red-dark)] text-[var(--red-dark)] hover:text-[var(--white)] font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-[var(--red-dark)]">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span>Home</span>
        </button>
      </Link>

      <main className="flex-grow pb-24">
        
        {/* HERO SECTION*/}
        <section className="relative min-h-[65vh] flex items-center justify-center text-[var(--white)] pt-38 pb-20 overflow-hidden">
          <Image 
            src="/images/menu/headerMenu1.gif"
            alt="Italian Restaurant Ambiance"
            fill
            priority 
            className="object-cover object-center scale-105" 
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/100 via-[var(--red-dark)]/50 to-[var(--black)]/80" />          
          
          <div className="relative z-10 text-center px-4 -mt-10">
            <span className="block text-[var(--green)] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-1 animate-fadeIn">
              Taste The Tradition
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 animate-fadeIn drop-shadow-2xl">
              OUR MENU
            </h1>
            <div className="w-20 h-1 bg-[var(--gold)] mx-auto rounded-full animate-fadeIn delay-100"></div>
          </div>
        </section>

        {/* FILTER SECTION */}
        <section className="relative z-20 max-w-3xl mx-auto px-2 -mt-24 mb-8">
          <div className="bg-[var(--white)]/95 backdrop-blur-xl rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-[var(--white)]/50 p-8 md:p-10 flex flex-col items-center gap-5 animate-fadeInUp">
            
            <div className="flex flex-wrap justify-center gap-3">
                {['all', 'food', 'drinks'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-8 py-2 rounded-full text-base font-bold transition-all duration-300 border-2
                    ${activeCategory === cat 
                        ? 'bg-[var(--red-dark)] border-[var(--red-dark)] text-[var(--white)] shadow-md transform scale-105' 
                        : 'bg-transparent border-[var(--red-dark)]/10 text-[var(--red-dark)] hover:border-[var(--red-dark)] hover:bg-[var(--red-dark)]/5'
                    }`}
                >
                    {cat === 'all' ? 'All Menu' : cat === 'food' ? 'Pizza' : 'Drinks'}
                </button>
                ))}
            </div>

            <Link href="/promotions">
                <button className="relative px-10 py-2 rounded-full bg-[var(--gold)] text-[var(--red-dark)] font-bold text-[14px] tracking-widest uppercase shadow-lg hover:shadow-[var(--gold)]/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[var(--white)]/60 to-transparent -translate-x-full animate-shimmer" />
                    <div className="relative flex items-center gap-2">
                        <span>Special Promos & Deals</span>
                    </div>
                </button>
            </Link>

          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-8">
          <div className="bg-[var(--white)]/95 backdrop-blur-xl rounded-[2rem] shadow-lg border border-[var(--white)]/50 p-5">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              
              {/* Search Input */}
              <div className="flex-grow relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-full border-2 border-[var(--gray-light)] focus:border-[var(--gold)] focus:outline-none transition-all text-[var(--red-dark)] placeholder:text-[var(--gray)] bg-white"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--gray)] hover:text-[var(--red-dark)] transition-colors font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none px-6 py-3 pr-12 rounded-full border-2 border-[var(--gray-light)] focus:border-[var(--gold)] focus:outline-none transition-all text-[var(--red-dark)] font-semibold cursor-pointer bg-white min-w-[200px]"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[var(--red-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Results Counter */}
            <div className="mt-3 text-center text-sm text-[var(--gray-dark)]">
              Showing <span className="font-bold text-[var(--red-dark)]">{filteredItems.length}</span> item{filteredItems.length !== 1 ? 's' : ''}
              {searchQuery && <span> for "<span className="italic font-semibold">{searchQuery}</span>"</span>}
            </div>
          </div>
        </section>

        {/* MENU GRID  */}
        <section className="max-w-7xl mx-auto px-6">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative bg-[var(--white)] rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--cream)] flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-72 rounded-[1.5rem] overflow-hidden mb-5 shadow-inner">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/*Favorite Button*/}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-10"
                    >
                      <span className={`text-xl transition-all ${favorites.includes(item.id) ? 'text-red-500 scale-125' : 'text-gray-400'}`}>
                        {favorites.includes(item.id) ? '❤️' : '🤍'}
                      </span>
                    </button>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 bg-[var(--white)]/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[var(--gray-light)]">
                      <span className="text-[var(--green-dark)] font-bold text-base tracking-wide">
                        Rp {item.price.toLocaleString('id-ID')}
                      </span>
                    </div>

                    {/* Promo Badge  */}
                    {item.isPromo && (
                        <div className="absolute top-4 right-4 bg-[var(--red)] text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg tracking-widest animate-pulse border border-white/20">
                            PROMO
                        </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="px-2 text-center pb-2 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[var(--red-dark)] mb-3 leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[var(--gray-dark)] text-sm mb-6 line-clamp-2 leading-relaxed opacity-80 px-2 italic">
                      {item.description}
                    </p>
                    
                    <Link href={`/menu/${item.id}`} className="block mt-auto">
                      <button className="w-full py-3 rounded-xl border border-[var(--red-dark)] text-[var(--red-dark)] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[var(--red-dark)] hover:text-[var(--cream)] transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 opacity-50">
              <span className="text-6xl block mb-4">🍽️</span>
              <p className="text-2xl italic">No items found.</p>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-8 py-3 rounded-full bg-[var(--red-dark)] text-white font-bold hover:bg-[var(--red)] transition-all"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </section>

      </main>

      {/* FOOTER SECTION */}
      <section className="relative w-full h-[40vh] mx-auto flex flex-col items-center justify-center bg-gradient-to-b from-[var(--cream)]/80 to-[var(--red-dark)]/90 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-2 text-base italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>

      <Footer />
      
    </div>
  );
}