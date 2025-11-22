"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { menuData } from '../data/menuData'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drinks'>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--cream)] font-playfair">
      
      <Navbar />

      <main className="flex-grow pb-20">
        

        <section className="relative min-h-[50vh] flex items-center justify-center text-[var(--white)] pt-32 overflow-hidden">
          
          <Image 
            src="/images/menu/menu.jpg"
            alt="Italian Restaurant Ambiance"
            fill
            priority 
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/80 to-[var(--black)]/70" />
          
          {/* Content Teks */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-2 animate-fadeIn">
              OUR MENU
            </h1>
            <p className="text-lg italic text-[var(--cream)] tracking-wide animate-fadeIn">
              Authentic Italian Flavors
            </p>
          </div>
        </section>

        {/* --- Filter Buttons --- */}
        <section className="max-w-7xl mx-auto px-6 mt-12 mb-10">
          <div className="flex justify-center gap-6 animate-fadeIn">
            {['all', 'food', 'drinks'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 border border-[var(--red-dark)]
                  ${activeCategory === cat 
                    ? 'bg-[var(--red-dark)] text-[var(--white)] shadow-lg transform scale-105' 
                    : 'bg-transparent text-[var(--red-dark)] hover:bg-[var(--red-dark)]/10'
                  }`}
              >
                {cat === 'all' ? 'All Menu' : cat === 'food' ? 'Pizza' : 'Drinks'}
              </button>
            ))}
          </div>
        </section>

        {/* --- Menu Grid --- */}
        <section className="max-w-7xl mx-auto px-6">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-[var(--white)] rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-[var(--gray-light)] animate-fadeIn"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-[var(--green-dark)] text-white px-4 py-1 rounded-full font-bold shadow-md">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow text-center">
                    <h3 className="text-2xl font-bold text-[var(--red-dark)] mb-2 group-hover:text-[var(--red)] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[var(--gray-dark)] text-sm mb-6 flex-grow line-clamp-3">
                      {item.description}
                    </p>
                    
                    <Link href={`/menu/${item.id}`} className="w-full mt-auto">
                      <button className="w-full py-3 border border-[var(--green-dark)] text-[var(--green-dark)] font-semibold rounded-xl hover:bg-[var(--green-dark)] hover:text-white transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[var(--gray-dark)]">
              <p className="text-2xl">No items found.</p>
            </div>
          )}
        </section>

      </main>

      <Footer />
      
    </div>
  );
}