"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PizzaAnim from "@/components/PizzaAnim";

const menuItems = [
  {
    img: "/images/pizza2.png",
    title: "Classic Cheese Pizza",
    desc: "The true taste of Italy with rich tomato sauce and fresh mozzarella.",
  },
  {
    img: "/images/pizza4.png",
    title: "Frutti di Mare Pizza",
    desc: "A culinary journey crafted from the freshest ingredients.",
  },
  {
    img: "/images/pizza5.png",
    title: "Pepperoni Pizza",
    desc: "A timeless favorite topped with pepperoni, tomato sauce, and melted mozzarella.",
  }
];

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full font-playfair overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/homeWall.png')", transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="absolute inset-0 bg-linear-to-b from-(--black)/40 via-transparent to-(--black)/60" />
        <section className="relative pt-52 pb-40 text-center px-4">
          <div className="animate-fadeIn">
            <h1 
              className="text-5xl md:text-7xl text-(--cream) drop-shadow-2xl font-bold tracking-wider"
              style={{ textShadow: "0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.2)" }}
            >
              BENVENUTI A NOTTE AZZURA
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-(--cream) opacity-50" />
              <p className="text-xl md:text-2xl text-(--cream) drop-shadow-md italic animate-pulse">
                mangiare bene è vivere bene
              </p>
              <div className="h-px w-16 bg-(--cream) opacity-50" />
            </div>
          </div>
          <PizzaAnim />
        </section>
      </div>

      {/* Introduction */}
      <section className="relative py-24 px-4 overflow-hidden bg-linear-to-b from-(--black) via-(--gray-dark) to-(--red)">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-8xl animate-float">🍕</div>
          <div className="absolute bottom-20 right-10 text-8xl animate-float" style={{ animationDelay: '2s' }}>🍃</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16 animate-fadeIn text-center">
            <div className="inline-block mb-4">
              <div className="h-px w-16 bg-(--green-light) mx-auto mb-2" />
              <div className="text-(--green-light) text-sm tracking-[0.3em] uppercase">Premier</div>
            </div>
            <h1 className="text-4xl md:text-5xl text-(--cream) font-bold mb-4 tracking-wide">
              Everyone's Number One<br/>Pizza Restaurant
            </h1>
            <p className="text-lg text-(--cream-dark) max-w-2xl mx-auto leading-relaxed">
              Authentic Italian Taste — Because You Deserve the Real Flavors of Italy
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative group animate-slideRight flex-1">
              <div className="absolute -inset-1 bg-linear-to-br from-(--green-light) to-(--red) opacity-20 blur-xl group-hover:opacity-30 transition duration-700" />
                <div className="relative inline-block mx-auto">
                  <Image
                    src="/images/pizzaDisp.jpg"
                    alt="Pizza Display"
                    width={550}
                    height={450}
                    className="rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-700 block"
                  />
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-(--green-light) opacity-60" />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-(--green-light) opacity-60" />
                </div>
            </div>
            <div className="flex-1 animate-slideLeft">
              <div className="bg-(--white)/5 backdrop-blur-sm p-10 rounded-lg border border-(--cream-dark)/20">
                <div className="text-(--cream) text-base leading-loose space-y-5">
                  <p className="text-2xl italic text-(--green-light) mb-3 font-light">Ciao e benvenuti.</p>
                  <p className="text-(--gray-light) text-justify">
                    Step into an experience where authentic Italian tradition meets refined culinary craft. Here, every dish is shaped with a quiet devotion to heritage, letting simple ingredients speak with unexpected depth.
                  </p>
                  <p className="text-(--gray-light) text-justify">
                    Our pizzas are prepared <span className="text-(--green-light) italic">con cura</span> — thin, crisp, and topped with the freshest ingredients gathered at their peak. Each bite carries the subtle warmth of a wood-fired touch, a gentle reminder of classic Italian kitchens.
                  </p>
                  <p className="text-(--gray-light) text-justify">
                    Rich, slow-cooked sauces and perfectly melted cheeses create a harmony of flavors that evoke the true essence of Italy, inviting you to linger a little longer and savor a culinary journey that feels both timeless and new.
                  </p>
                  <div className="pt-6 mt-6 border-t border-(--cream-dark)/20">
                    <p className="text-(--cream)">
                      Welcome to a place where quality, tradition, and taste come together —
                      <span className="text-(--green-light) italic"> la vera cucina italiana.</span>
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-(--cream-dark)/20">
                  <div className="text-center">
                    <div className="text-3xl font-light text-(--green-light) mb-1">40</div>
                    <div className="text-xs text-(--cream-dark) tracking-wider uppercase">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-(--green-light) mb-1">1.500K+</div>
                    <div className="text-xs text-(--cream-dark) tracking-wider uppercase">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-(--green-light) mb-1">100%</div>
                    <div className="text-xs text-(--cream-dark) tracking-wider uppercase">Authentic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="relative py-20 text-center bg-(--cream)">
        <div className="text-center mb-35 animate-fadeIn">
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-(--red) mx-auto mb-2" />
            <div className="text-(--red) text-sm tracking-[0.3em]">SIGNATURE</div>
          </div>
          <h1 className="text-5xl md:text-6xl text-(--red) mb-4">Our Top Selection</h1>
          <p className="text-lg text-(--gray) max-w-2xl mx-auto">
            Your gateway to authentic Italian cuisine and unforgettable dining experiences
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-30 mb-16 px-4">
          {menuItems.map((c, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative w-80 p-6 pt-24 shadow-2xl rounded-lg transition-all duration-500 cursor-pointer
                  ${hoveredIndex === i ? 'bg-linear-to-br from-(--red) to-(--red-light) -translate-y-4 scale-105' : 'bg-(--red)'}
                  hover:shadow-[0_20px_60px_rgba(139,0,0,0.5)]`}
              >
                <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                  <div className={`transition-transform duration-500 ${ hoveredIndex === i ? 'rotate-12 scale-110' : '' }`}>
                    <Image
                      src={ c.img }
                      alt={ c.title }
                      width={ 180 }
                      height={ 180 }
                      className="rounded-full shadow-2xl ring-4 ring-(--cream)"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-(--green-light) mb-3 transition-colors group-hover:text-(--cream)">{ c.title }</h2>
                <p className="text-sm text-(--cream) opacity-80 leading-relaxed mb-4">{ c.desc }</p>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-(--cream) opacity-30 transition-opacity group-hover:opacity-60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-(--cream) opacity-30 transition-opacity group-hover:opacity-60" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6 mt-16">
          <Link
            href="/menu"
            className="group relative bg-(--red) text-(--cream) font-light text-xl px-16 py-4 tracking-widest uppercase hover:bg-(--red-dark) transition-all shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10">Our Menu</span>
          </Link>
          <Link
            href="/promotions"
            className="text-(--red) text-sm tracking-wider uppercase hover:text-(--red-light) transition-all border-b border-(--red)/30 hover:border-(--red) pb-1"
          >
            Discover Special Offers
          </Link>
        </div>
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-(--gray-dark) italic text-lg font-light leading-relaxed mb-6 px-4">
            "La pizza è un equilibrio perfetto tra tecnica, tradizione e anima."
          </p>
          <div className="h-px w-24 bg-(--cream-dark) mx-auto mb-3" />
          <p className="text-(--gray) text-sm tracking-wider">Franco Pepe — Pizzaiolo</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}