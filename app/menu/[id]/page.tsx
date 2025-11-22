"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { menuData } from '../../data/menuData'; 

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-[var(--gold)] text-xl">
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
    <div className="flex items-center gap-2 mb-6">
      <div className="flex">{stars}</div>
      <span className="text-[var(--gray-dark)] text-sm font-medium ml-2">
        {rating} ({reviews} Reviews)
      </span>
    </div>
  );
};

export default function MenuDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  
  const item = menuData.find((p) => p.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--cream)] text-[var(--red-dark)]">
        <h1 className="text-4xl font-bold mb-4">Menu Not Found</h1>
        <Link href="/menu" className="underline">Back to Menu</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--black)] font-playfair flex items-center justify-center p-6 md:p-20">
      
      <div className="max-w-6xl w-full bg-[var(--white)] rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fadeIn">
        
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto group">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>

        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
          
          <div className="mb-4">
            <span className="bg-[var(--red-dark)] text-[var(--white)] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {item.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--red-dark)] mb-2 leading-tight">
            {item.name}
          </h1>

          <StarRating rating={item.rating || 0} reviews={item.reviews || 0} />

          <p className="text-3xl font-semibold text-[var(--green-dark)] mb-8">
            Rp {item.price.toLocaleString('id-ID')}
          </p>

          <div className="w-20 h-1 bg-[var(--gold)] mb-8"></div>

          <div className="mb-10">
            <p className="text-[var(--gray-dark)] text-lg leading-relaxed text-justify">
              {item.detailDesc || item.description}
            </p>
          </div>

          <div className="mt-auto">
            <Link href="/menu">
              <button className="group flex items-center gap-2 text-[var(--red-dark)] font-bold text-lg hover:text-[var(--red)] transition-colors">
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> 
                Back to Menu List
              </button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}