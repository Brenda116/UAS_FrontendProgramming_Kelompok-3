"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Notte Azzura Earns Michelin Mention 2025",
      img: "/images/News.jpg",
      date: "April 15, 2025",
      publisher: "The Gourmet Review",
      desc: "A proud moment for our culinary team as Notte Azzura has been officially recognized in the 2025 Michelin Guide for its outstanding authenticity and craftsmanship in Italian dining.",
    },
    {
      id: 2,
      title: "Chef Giovanni Russo Wins Culinary Excellence Award",
      img: "/images/News2.jpg",
      date: "June 7, 2025",
      publisher: "Culinary Arts Magazine",
      desc: "Our Head Chef Giovanni Russo was honored for his dedication to preserving traditional Italian techniques while innovating with modern artistry — a balance that defines Notte Azzura.",
    },
    {
      id: 3,
      title: "Green Kitchen Initiative: A Step Toward Sustainability",
      img: "/images/News3.jpg",
      date: "September 12, 2025",
      publisher: "Sustainable Dining Journal",
      desc: "Notte Azzura introduces a “Green Kitchen” policy — partnering with local farms and reducing kitchen waste by 40% while maintaining exceptional culinary standards.",
    },
    {
      id: 4,
      title: "Notte Azzura Hosts Annual Wine & Dine Charity Gala",
      img: "/images/bg1.jpg",
      date: "October 2, 2025",
      publisher: "Charity Times",
      desc: "An unforgettable night of fine dining and giving back. The charity gala raised funds to support local food programs, aligning with our mission of sharing the joy of authentic Italian cuisine.",
    },
    {
      id: 5,
      title: "New Seasonal Menu: ‘Autunno Italiano’ Unveiled",
      img: "/images/CompanyNews.jpg",
      date: "November 1, 2025",
      publisher: "Seasonal Flavors Weekly",
      desc: "Our chefs introduce ‘Autunno Italiano’ — a seasonal celebration of truffle, porcini, and handcrafted pasta, highlighting the rustic charm of Italian autumn cuisine.",
    },
    {
      id: 6,
      title: "Expanding Our Legacy: New Branch in Florence",
      img: "/images/Media01.jpg",
      date: "December 18, 2025",
      publisher: "Florence Daily News",
      desc: "Notte Azzura proudly announces its second location in the heart of Florence, Italy — bringing authentic taste and timeless hospitality to more guests.",
    },
    {
      id: 7,
      title: "Behind the Plate: A Day in the Kitchen with Chef Maria",
      img: "/images/Media02.jpg",
      date: "January 22, 2026",
      publisher: "Culinary Insights Weekly",
      desc: "Go behind the scenes with our talented Sous Chef Maria Rossi as she shares insights into the artistry and discipline that bring each Notte Azzura dish to life.",
    },
    {
      id: 8,
      title: "Local Partnership: Supporting Lombardy Farmers",
      img: "/images/Media03.jpg",
      date: "February 10, 2026",
      publisher: "Farm to Table News",
      desc: "Notte Azzura strengthens its commitment to sustainability through new partnerships with Lombardy’s finest organic farmers, ensuring fresh and ethical ingredients daily.",
    },
    {
      id: 9,
      title: "Culinary Workshop Series: Learn from the Best",
      img: "/images/News.jpg",
      date: "March 15, 2026",
      publisher: "Gourmet Education Monthly",
      desc: "Join our exclusive workshop series led by top chefs, designed to elevate your culinary skills and deepen your appreciation for Italian cuisine.",
    },
    {
      id: 10,
      title: "Notte Azzura Featured in ‘Top 100 Restaurants Worldwide’",
      img: "/images/News2.jpg",
      date: "April 20, 2026",
      publisher: "Global Culinary Review",
      desc: "Celebrated for excellence, Notte Azzura earns a spot in the prestigious ‘Top 100 Restaurants Worldwide’ list, recognized for its authentic flavors and exceptional service.",
    },
    {
      id: 11,
      title: "Innovative Dessert Menu: A Sweet Symphony",
      img: "/images/News3.jpg",
      date: "May 5, 2026",
      publisher: "Dessert Delights Magazine",
      desc: "Introducing a new range of desserts that blend traditional Italian flavors with modern techniques, creating a sweet symphony for the senses.",
    },
    {
      id: 12,
      title: "Notte Azzura’s Community Table Initiative",
      img: "/images/News4.jpg",
      date: "June 10, 2026",
      publisher: "Community Focus Weekly",
      desc: "Launching a new initiative to bring people together through shared meals and stories, fostering a sense of belonging and support within our local community.",
    },
    {
      id: 13,
      title: "Seasonal Ingredient Spotlight: The Art of Truffle",
      img: "/images/bg1.jpg",
      date: "July 18, 2026",
      publisher: "Gourmet Ingredients Journal",
      desc: "Explore the rich history and culinary versatility of truffles, a prized ingredient featured prominently in our seasonal dishes this summer.",
    },
    {
      id: 14,
      title: "Notte Azzura’s Culinary Team Competes in International Cook-Off",
      img: "/images/CompanyNews.jpg",
      date: "August 25, 2026",
      publisher: "Culinary Competition News",
      desc: "Our talented culinary team represented Notte Azzura in the prestigious International Cook-Off, showcasing their skills and passion on a global stage.",
    },
    {
      id: 15,
      title: "Expanding Horizons: New Vegan Menu Options",
      img: "/images/Media01.jpg",
      date: "September 10, 2026",
      publisher: "Vegan Lifestyle Magazine",
      desc: "Introducing a new range of vegan dishes that celebrate the flavors of Italy while catering to plant-based diets, expanding our menu to delight all guests.",
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(newsArticles.length / itemsPerPage);
  const newsSectionRef = useRef<HTMLDivElement | null>(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = newsArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    if (newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <main className="min-h-500 bg-[var(--cream)] text-[var(--red-dark)] font-playfair">
      
      {/* Hero */}
      <section className="relative h-[55vh] flex flex-col items-center justify-center bg-[var(--red-dark)] text-[var(--white)] text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/80 to-[var(--black)]/60" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            NOTTE AZZURA NEWS
          </h1>
          <p className="mt-4 text-sm md:text-ls italic tracking-widest text-[var(--cream)]">
            — mangiare bene è vivere bene —
          </p>
        </div>
      </section>

      {/* News Section */}
      <section ref={newsSectionRef} className="max-w-6xl mx-auto px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest border-b pb-4 border-[var(--red-dark)]/30">
            The Notte Azzura Times
          </h2>
          <p className="mt-3 text-sm md:text-4ls italic text-[var(--gray-dark)] tracking-wider">
            “Where every achievement is a story worth savoring.”
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 column-fill: balance">
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className="pt-6 border-t border-[var(--red-dark)]/20 transition-transform duration-300 hover:scale-105">
              <img
                src={article.img}
                alt={article.title}
                className="rounded-xl mb-4 w-270 h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 leading-snug text-[var(--red-dark)] hover:underline decoration-[var(--red-dark)]/40 underline-offset-4 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-sm md:text-md text-[var(--gray-dark)] leading-relaxed text-justify">
                {article.desc}
              </p>
              <p className="mt-3 text-sm text-[var(--gray)] italic">
                Published: {article.date}
                <br />    
                <span className="italic text-[var(--gray-dark)] tracking-wider">By {article.publisher}</span>
              </p>
            </article>
          ))}
        </div>

        {/* News Page Buttons */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-5 py-2 rounded-full border border-[var(--red-dark)] font-semibold transition ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[var(--red-dark)] hover:text-[var(--white)]"
            }`}
          >
            ← Previous
          </button>

          <span className="text-lg text-[var(--gray-dark)] font-medium tracking-widest">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-5 py-2 rounded-full border border-[var(--red-dark)] font-semibold transition ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[var(--red-dark)] hover:text-[var(--white)]"
            }`}
          >
            Next →
          </button>
        </div>
      </section>

      {/* Divider Hero */}
      <section className="relative w-full h-[35vh] md:h-[50vh] mx-auto mt-20 flex flex-col items-center justify-center text-center bg-[var(--red-dark)] text-[var(--white)]">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--white)] tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-3 text-lg italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>

      {/* Awards Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-widest border-b pb-4 border-[var(--red-dark)]/30">
            Awards & Recognitions
          </h2>
          <p className="text-sm md:text-4ls mt-3 italic text-[var(--gray-dark)]">
            “Honoring the milestones that shaped Notte Azzura’s journey of excellence.”
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="relative bg-[var(--white)] border-b-10 border-[var(--red-dark)] rounded-3xl shadow-md p-8 transition-transform duration-300 hover:scale-105 group overflow-hidden group overflow-hidden">
            <img src="/images/Trophy.png" alt="Michelin Recognition" className="mx-auto mb-6 w-28 h-28 object-contain" />
            <h3 className="text-2xl font-semibold text-[var(--red-dark)] mb-2">Michelin Guide Recognition</h3>
            <p className="text-[var(--gray-dark)]">
              Recognized in the <strong>2025 Michelin Guide</strong> for outstanding culinary authenticity and excellence in Italian cuisine.
            </p>

            {/* Text (Hover) */}
            <div className="absolute inset-0 bg-[var(--white)]/95 flex flex-col justify-center items-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                The story of <span className="italic font-semibold">Notte Azzura</span> began
                with a promise — to keep the essence of Italian dining alive in a modern world.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Our kitchen follows the same melody as the trattorias of Rome and Naples —
                where sauces bubble slowly and every plate carries a piece of history.
              </p>
            </div>
          </div>

          <div className="relative relative bg-[var(--white)] border-b-10 border-[var(--red-dark)] rounded-3xl shadow-md p-8 transition-transform duration-300 hover:scale-105 group overflow-hidden group overflow-hidden">
            <img src="/images/Trophy.png" alt="Culinary Excellence Award" className="mx-auto mb-6 w-28 h-28 object-contain" />
            <h3 className="text-2xl font-semibold text-[var(--red-dark)] mb-2">Culinary Excellence Award</h3>
            <p className="text-[var(--gray-dark)]">
              Presented to <strong>Chef Giovanni Russo</strong> for his creativity and mastery in modern Italian fine dining.
            </p>

            {/* Text (Hover) */}
            <div className="absolute inset-0 bg-[var(--white)]/95 flex flex-col justify-center items-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                <span className="italic font-semibold">Chef Giovanni Russo</span> has long been
                admired for his ability to elevate Italian classics with refined modern touches.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                His dishes speak through balance — honoring timeless traditions while introducing
                fresh interpretations that define his signature culinary artistry.
              </p>
            </div>
          </div>

          <div className="relative bg-[var(--white)] border-b-10 border-[var(--red-dark)] rounded-3xl shadow-md p-8 transition-transform duration-300 hover:scale-105 group overflow-hidden">
            <img src="/images/Trophy.png" alt="Sustainability Award" className="mx-auto mb-6 w-28 h-28 object-contain" />
            <h3 className="text-2xl font-semibold text-[var(--red-dark)] mb-2">Green Kitchen Sustainability Award</h3>
            <p className="text-[var(--gray-dark)]">
              Honored for the <strong>Green Kitchen Initiative</strong> — reducing waste and promoting sustainable sourcing across all kitchens.
            </p>

            {/* Text (Hover) */}
            <div className="absolute inset-0 bg-[var(--white)]/95 flex flex-col justify-center items-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Testament to Notte Azzura’s commitment to sustainability vision built on mindful
                sourcing, responsible waste management, and eco-conscious innovation.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Continuous effort to cultivate greener kitchen practices,
                ensuring every creation delights the palate but also respects the environment
                it comes from.
              </p>
            </div>
          </div>

          <div className="relative bg-[var(--white)] border-b-10 border-[var(--red-dark)] rounded-3xl shadow-md p-8 transition-transform duration-300 hover:scale-105 group overflow-hidden">
            <img src="/images/Trophy.png" alt="Excellence Award" className="mx-auto mb-6 w-28 h-28 object-contain" />
            <h3 className="text-2xl font-semibold text-[var(--red-dark)] mb-2">Customer Choice Excellence Award</h3>
            <p className="text-[var(--gray-dark)]">
              Awarded by our valued guests for <strong>exceptional dining experiences</strong> and outstanding hospitality that create lasting memories.
            </p>

            {/* Text (Hover) */}
            <div className="absolute inset-0 bg-[var(--white)]/95 flex flex-col justify-center items-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Chosen by our loyal guests, the <span className="italic font-semibold">Customer Choice Excellence Award</span> celebrates the genuine connections formed through every visit and every shared meal.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                It stands as a tribute to the warmth, care, and attentive hospitality
                that make each experience at Notte Azzura feel truly personal.
              </p>
            </div>
          </div>

          <div className="relative bg-[var(--white)] border-b-10 border-[var(--red-dark)] rounded-3xl shadow-md p-8 transition-transform duration-300 hover:scale-105 group overflow-hidden">
            <img src="/images/Trophy.png" alt="Sustainability Award" className="mx-auto mb-6 w-28 h-28 object-contain" />
            <h3 className="text-2xl font-semibold text-[var(--red-dark)] mb-2">Wine Pairing Mastery Award</h3>
            <p className="text-[var(--gray-dark)]">
              Recognized for expertise in <strong>wine selection and pairing</strong> that perfectly complements our finest Italian dishes.
            </p>

            {/* Text (Hover) */}
            <div className="absolute inset-0 bg-[var(--white)]/95 flex flex-col justify-center items-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Celebrating a refined mastery in selecting and pairing wines that elevate every
                Italian dish with harmony and depth.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Each pairing reflects a deep understanding of flavor, balance, and the artistry
                behind exceptional dining.
              </p>
            </div>
          </div>

          <div className="relative bg-[var(--white)] border-b-10 border-[var(--red-dark)] rounded-3xl shadow-md p-8 transition-transform duration-300 hover:scale-105 group overflow-hidden">
            <img src="/images/Trophy.png" alt="Sustainability Award" className="mx-auto mb-6 w-28 h-28 object-contain" />
            <h3 className="text-2xl font-semibold text-[var(--red-dark)] mb-2">Italian Heritage Preservation Award</h3>
            <p className="text-[var(--gray-dark)]">
              Recognized for preserving <strong>authentic Italian traditions</strong> and celebrating cultural heritage through traditional recipes and timeless dining practices.
            </p>

            {/* Text (Hover) */}
            <div className="absolute inset-0 bg-[var(--white)]/95 flex flex-col justify-center items-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Honoring a steadfast dedication to preserving authentic Italian traditions
                through cherished recipes and time-honored culinary practices.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] text-justify">
                Each dish reflects respect for heritage — keeping the spirit of classic
                Italian dining alive for every guest.
              </p>
            </div>
          </div>  
        </div>
      </section>

      {/* Back to About Page Button */}
      <section className="text-center py-16">
        <Link
          href="/about"
          className="inline-block border border-[var(--red-dark)] text-[var(--red-dark)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--red-dark)] hover:text-[var(--white)] transition duration-300"
        >
          Back to About Us
        </Link>
      </section>
    </main>
  );
}
