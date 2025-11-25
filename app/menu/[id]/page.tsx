"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { menuData, MenuItem } from '../../data/menuData'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-[var(--gold)] text-lg">
        {rating >= index + 1 ? (
          <i className="fas fa-star"></i>
        ) : rating >= number ? (
          <i className="fas fa-star-half-alt"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="flex">{stars}</div>
      <span className="text-[var(--gray-dark)] text-xs font-medium ml-2">
        {rating} ({reviews} Reviews)
      </span>
    </div>
  );
};

export default function MenuDetailPage() {
  const params = useParams();
  const [item, setItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    if (params?.id) {
      const foundItem = menuData.find((p) => p.id === Number(params.id));
      setItem(foundItem || null);
    }
  }, [params]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--cream)]">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-[var(--red-dark)] pt-32">
           <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--cream)] font-playfair">
      
      <Navbar />

      <main className="flex-grow px-6 pt-36 pb-10">
        
        <div className="max-w-5xl mx-auto bg-[var(--white)] rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          
          <div className="w-full md:w-1/2 relative h-[300px] md:h-auto group">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            
            {item.isPromo && (
               <div className="absolute top-4 left-4 bg-[var(--red)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                  PROMO
               </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
            
            <div className="mb-3">
              <span className="bg-[var(--red-dark)] text-[var(--white)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {item.category == 'food' ? 'PIZZA' : 'DRINKS'}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[var(--red-dark)] mb-1 leading-tight">
              {item.name}
            </h1>

            <StarRating rating={item.rating || 0} reviews={item.reviews || 0} />

            <p className="text-2xl font-semibold text-[var(--green-dark)] mb-5">
              Rp {item.price.toLocaleString('id-ID')}
            </p>

            <div className="w-16 h-1 bg-[var(--gold)] mb-5"></div>

            <div className="mb-6">
              <p className="text-[var(--gray-dark)] text-base leading-relaxed text-justify">
                {item.detailDesc || item.description}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-3 items-start">
              <Link href="/menu">
                <button className="group flex items-center gap-2 text-[var(--red-dark)] font-bold text-base hover:text-[var(--red)] transition-colors">
                  <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> 
                  Back to Menu
                </button>
              </Link>

              {/* tombol ke halaman promo (muncul kalo si itemnya promo) */}
              {item.isPromo && (
                <Link href="/promotions">
                  <button className="group flex items-center gap-2 text-[var(--gold)] font-bold text-base hover:text-[var(--orange)] transition-colors">
                    <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> 
                    Promos & Deals
                  </button>
                </Link>
              )}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}