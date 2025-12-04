"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuData } from '../data/menuData'; 
import { voucherData } from '../data/vouchers'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PromotionsPage() {
  const promoItems = menuData.filter(item => item.isPromo);
  
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  const [voucherFilter, setVoucherFilter] = useState<'all' | 'percentage' | 'fixed'>('all');
  
  const [favorites, setFavorites] = useState<number[]>([]);

  // load favorites dari local storage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('menuFavorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id) 
      ? favorites.filter(fav => fav !== id) 
      : [...favorites, id];
    
    setFavorites(updatedFavorites);
    localStorage.setItem('menuFavorites', JSON.stringify(updatedFavorites));
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // filter vouchers
  const filteredVouchers = voucherFilter === 'all' 
    ? voucherData 
    : voucherData.filter(v => {
        if (voucherFilter === 'percentage') return v.discount.includes('%');
        if (voucherFilter === 'fixed') return v.discount.includes('Rp');
        return true;
      });

  return (
    <div className="flex flex-col min-h-screen bg-[var(--cream)] font-playfair">
      <Navbar />
      <main className="flex-grow pb-20">
        
        <section className="relative min-h-[65vh] flex items-center justify-center text-[var(--white)] pt-32 overflow-hidden">
           <Image 
            src="/images/menu/promoHeader.gif"
            alt="Special Promotions"
            fill
            priority 
            className="object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/90 to-[var(--black)]/60" />
          
          <div className="relative z-10 text-center px-4 animate-fadeIn">
            <span className="text-[var(--gold)] text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-2 block">
              Exclusive Offers
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-4 text-[var(--white)]">
              PROMOS & DEALS
            </h1>
            <p className="text-sm italic text-[var(--cream)] tracking-wide max-w-2xl mx-auto">
              From special menu prices to exclusive vouchers, find all our best offers here.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-10">
            <Link href="/menu">
                <button className="group flex items-center gap-2 text-[var(--red-dark)] font-bold text-base hover:text-[var(--red)] transition-colors mb-4">
                    <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    <span>Menu</span>
                </button>
            </Link>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-10">
            <div className="text-center mb-8 animate-fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--red-dark)] mb-3">
                    Vouchers & Coupons
                </h2>
                <div className="w-24 h-1 bg-[var(--gold)] mx-auto"></div>
            </div>

            {/* voucher filter */}
            <div className="flex justify-center gap-3 mb-8">
              {['all', 'percentage', 'fixed'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setVoucherFilter(filter as any)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                    voucherFilter === filter
                      ? 'bg-[var(--red-dark)] border-[var(--red-dark)] text-white shadow-md scale-105'
                      : 'bg-transparent border-[var(--red-dark)]/20 text-[var(--red-dark)] hover:border-[var(--red-dark)]'
                  }`}
                >
                  {filter === 'all' ? 'All Vouchers' : filter === 'percentage' ? '% Percentage' : 'Fixed Amount'}
                </button>
              ))}
            </div>

            {/* voucher counter */}
            <div className="text-center mb-6">
              <span className="text-sm text-[var(--gray-dark)]">
                Showing <span className="font-bold text-[var(--red-dark)]">{filteredVouchers.length}</span> voucher{filteredVouchers.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                {filteredVouchers.map((voucher) => (
                    <div 
                        key={voucher.id} 
                        className={`relative flex flex-col sm:flex-row rounded-2xl border-2 border-dashed p-6 shadow-sm hover:shadow-md transition-shadow ${voucher.color.split(' ')[0]} ${voucher.color.split(' ')[1]}`}
                    >
                        <div className="flex-shrink-0 flex flex-col justify-center items-center sm:border-r-2 sm:border-dashed border-current sm:pr-6 mb-4 sm:mb-0">
                            <span className={`text-3xl font-extrabold ${voucher.color.split(' ')[2]}`}>
                                {voucher.discount}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider opacity-75 mt-1">
                                Coupon
                            </span>
                        </div>

                        <div className="flex-grow sm:pl-6 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-[var(--black)] mb-1">
                                {voucher.title}
                            </h3>
                            <p className="text-[var(--gray-dark)] text-sm mb-4 leading-relaxed">
                                {voucher.description}
                            </p>
                            
                            <div className="flex items-center justify-between bg-white/60 p-2 rounded-lg border border-gray-200">
                                <span className="font-mono font-bold text-[var(--red-dark)] tracking-widest pl-2">
                                    {voucher.code}
                                </span>
                                <button 
                                    onClick={() => handleCopyCode(voucher.code)}
                                    className={`text-xs font-bold px-3 py-2 rounded transition-all ${
                                      copiedCode === voucher.code 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-[var(--red-dark)] text-white hover:bg-[var(--red)]'
                                    }`}
                                >
                                    {copiedCode === voucher.code ? '✓ COPIED' : 'COPY'}
                                </button>
                            </div>
                            <span className="text-[10px] text-[var(--gray)] mt-2 italic">
                                * {voucher.validUntil}
                            </span>
                        </div>
                        <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[var(--cream)] rounded-full transform -translate-y-1/2"></div>
                        <div className="absolute -right-3 top-1/2 w-6 h-6 bg-[var(--cream)] rounded-full transform -translate-y-1/2"></div>
                    </div>
                ))}
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-24">
             <div className="text-center mb-12 animate-fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--red-dark)] mb-3">
                    Limited Time Menu Deals
                </h2>
                <div className="w-24 h-1 bg-[var(--gold)] mx-auto"></div>
             </div>
             
             {promoItems.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {promoItems.map((item) => (
                   <div key={item.id} className="flex flex-col md:flex-row bg-[var(--white)] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--gold)]/30 group animate-fadeIn">
                      <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                        <Image src={item.imageUrl} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-[var(--red)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">SPECIAL PRICE</div>
                        
                        {/* fav button */}
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-10"
                        >
                          <span className={`text-xl transition-all ${favorites.includes(item.id) ? 'text-red-500 scale-125' : 'text-gray-400'}`}>
                            {favorites.includes(item.id) ? '❤️' : '🤍'}
                          </span>
                        </button>
                      </div>
                      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">{item.category === 'food' ? 'PIZZA' : 'Drinks'}</span>
                            <div className="h-px w-10 bg-[var(--gold)]/50"></div>
                        </div>
                        <h3 className="text-3xl font-bold text-[var(--red-dark)] mb-3">{item.name}</h3>
                        <p className="text-[var(--gray-dark)] text-sm mb-6 line-clamp-2 leading-relaxed">{item.description}</p>
                        
                        {/* savings badge */}
                        <div className="mb-4 inline-flex items-center gap-2 bg-[var(--green)]/10 px-3 py-1 rounded-full self-start">
                          <span className="text-xs font-bold text-[var(--green-dark)]">💰 Save Rp {((item.price * 1.2) - item.price).toLocaleString('id-ID')}</span>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs text-[var(--gray)] line-through">Rp {(item.price * 1.2).toLocaleString('id-ID')}</span>
                                <span className="text-2xl font-bold text-[var(--green-dark)]">Rp {item.price.toLocaleString('id-ID')}</span>
                            </div>
                            <Link href={`/menu/${item.id}`}>
                                <button className="px-6 py-3 bg-[var(--red-dark)] text-white font-semibold rounded-xl hover:bg-[var(--red)] transition-all duration-300 shadow-md">View</button>
                            </Link>
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
             ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                    <h3 className="text-2xl font-bold text-[var(--gray-dark)]">No Menu Deals Currently</h3>
                </div>
             )}
        </section>

        {/* promo stats sum */}
        <section className="max-w-5xl mx-auto px-6 mt-20">
          <div className="bg-gradient-to-r from-[var(--gold)]/20 to-[var(--cream)] rounded-3xl p-8 border-2 border-[var(--gold)]/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-[var(--red-dark)] mb-2">{voucherData.length}</div>
                <div className="text-sm font-semibold text-[var(--gray-dark)] uppercase tracking-wide">Active Vouchers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--red-dark)] mb-2">{promoItems.length}</div>
                <div className="text-sm font-semibold text-[var(--gray-dark)] uppercase tracking-wide">Menu Deals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--red-dark)] mb-2">Up to 20%</div>
                <div className="text-sm font-semibold text-[var(--gray-dark)] uppercase tracking-wide">Max Discount</div>
              </div>
            </div>
          </div>
        </section>

      </main>

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