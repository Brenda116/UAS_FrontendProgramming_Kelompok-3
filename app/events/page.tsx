"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const eventsData = [
  {
    id: "wine-tasting-tuscany",
    title: "Wine Tasting: Flavors of Tuscany",
    date: "2024-12-15",
    time: "19:00 - 22:00",
    price: 45,
    category: "Wine Tasting",
    images: [
      "https://i.pinimg.com/736x/16/2c/87/162c87b619a9761f33afeda1616c235f.jpg",
      "https://i.pinimg.com/736x/8d/25/90/8d2590c9d5e8eaa35e33e5f5db8f5b8e.jpg",
      "https://i.pinimg.com/736x/ab/12/34/ab123456789012345678901234567890.jpg"
    ],
    shortDesc: "Experience the finest wines from Tuscany paired with authentic Italian appetizers.",
    fullDesc: "Join us for an exclusive evening celebrating the wines of Tuscany. Our sommelier will guide you through a selection of 6 premium wines, each paired with carefully chosen Italian appetizers. Learn about the history, terroir, and winemaking traditions of this iconic region.",
    highlights: [
      "6 premium Tuscan wines",
      "Authentic Italian appetizer pairings",
      "Expert sommelier guidance",
      "Wine region history & education"
    ],
    capacity: 30,
    registered: 18
  },
  {
    id: "pasta-making-masterclass",
    title: "Pasta Making Masterclass",
    date: "2024-12-20",
    time: "14:00 - 17:00",
    price: 65,
    category: "Cooking Class",
    images: [
      "https://i.pinimg.com/736x/74/88/fe/7488fe51f334051a39bfefc0229205ae.jpg",
      "https://i.pinimg.com/736x/2a/cd/ef/2acdef123456789012345678901234.jpg",
      "https://i.pinimg.com/736x/5b/de/01/5bde01234567890123456789012345.jpg"
    ],
    shortDesc: "Learn the art of handmade pasta from our Italian chef.",
    fullDesc: "Discover the secrets of authentic Italian pasta making in this hands-on masterclass. Our head chef will teach you how to make fresh pasta from scratch, including fettuccine, ravioli, and gnocchi. You'll learn traditional techniques passed down through generations and enjoy your creations at the end of class.",
    highlights: [
      "Hands-on pasta making experience",
      "Learn 3 different pasta types",
      "Traditional Italian techniques",
      "Take home your creations",
      "Complimentary wine included"
    ],
    capacity: 20,
    registered: 15
  },
  {
    id: "christmas-feast",
    title: "Christmas Italian Feast",
    date: "2024-12-24",
    time: "18:00 - 23:00",
    price: 85,
    category: "Special Event",
    images: [
      "https://i.pinimg.com/736x/c5/98/50/c59850de0769bca7dfc25d2133b287e9.jpg",
      "https://i.pinimg.com/736x/3c/45/67/3c456789012345678901234567890123.jpg",
      "https://i.pinimg.com/736x/8d/89/ab/8d89ab012345678901234567890123.jpg"
    ],
    shortDesc: "Celebrate Christmas Eve with a traditional Italian feast.",
    fullDesc: "Experience an authentic Italian Christmas celebration with our special 7-course feast. Enjoy traditional dishes like Feast of the Seven Fishes, homemade panettone, and regional specialties, all accompanied by live Italian music and a festive atmosphere.",
    highlights: [
      "7-course traditional Italian menu",
      "Live Italian music performance",
      "Festive decorations & atmosphere",
      "Complimentary prosecco welcome drink",
      "Special Christmas dessert selection"
    ],
    capacity: 50,
    registered: 42
  },
  {
    id: "truffle-dinner",
    title: "White Truffle Dinner Experience",
    date: "2025-01-10",
    time: "19:30 - 22:30",
    price: 120,
    category: "Exclusive Dining",
    images: [
      "https://i.pinimg.com/736x/b2/55/88/b255882221116dea71f84377d4406b38.jpg",
      "https://i.pinimg.com/736x/4d/56/78/4d567890123456789012345678901234.jpg",
      "https://i.pinimg.com/736x/9e/01/23/9e012345678901234567890123456789.jpg"
    ],
    shortDesc: "An exclusive evening featuring rare white truffles from Alba.",
    fullDesc: "Indulge in the luxury of white truffles in this exclusive dining experience. Each course of our specially crafted 5-course menu features fresh white truffles from Alba, Italy. Our chef will showcase the versatility of this prized ingredient in both traditional and innovative preparations.",
    highlights: [
      "5-course truffle-focused menu",
      "Fresh white truffles from Alba",
      "Wine pairing included",
      "Limited to 25 guests",
      "Meet the chef experience"
    ],
    capacity: 25,
    registered: 20
  },
  {
    id: "italian-street-food",
    title: "Italian Street Food Night",
    date: "2025-01-18",
    time: "18:00 - 22:00",
    price: 35,
    category: "Special Event",
    images: [
      "https://i.pinimg.com/736x/69/16/23/691623d9001418e653a58f2fa2517fd2.jpg",
      "https://i.pinimg.com/736x/5e/67/89/5e678901234567890123456789012345.jpg",
      "https://i.pinimg.com/736x/0f/12/34/0f123456789012345678901234567890.jpg"
    ],
    shortDesc: "Explore the flavors of Italian street food from different regions.",
    fullDesc: "Take a culinary journey through Italy's streets with this casual and fun event. Sample authentic street food from various Italian regions, including arancini, supplì, porchetta sandwiches, and more. Enjoy a relaxed atmosphere with Italian music and aperitivo culture.",
    highlights: [
      "Unlimited street food tastings",
      "10+ different regional specialties",
      "Italian craft beer selection",
      "Live DJ with Italian music",
      "Casual, social atmosphere"
    ],
    capacity: 60,
    registered: 25
  },
  {
    id: "valentines-dinner",
    title: "Valentine's Day Romance",
    date: "2025-02-14",
    time: "19:00 - 23:00",
    price: 95,
    category: "Special Event",
    images: [
      "https://i.pinimg.com/1200x/5c/6a/d4/5c6ad4d9a9440ca979884e8e3b17eaf2.jpg",
      "https://i.pinimg.com/736x/6f/78/90/6f789012345678901234567890123456.jpg",
      "https://i.pinimg.com/736x/1g/23/45/1g234567890123456789012345678901.jpg"
    ],
    shortDesc: "A romantic evening for two with exquisite Italian cuisine.",
    fullDesc: "Celebrate love with an unforgettable Valentine's dinner. Enjoy a specially curated 6-course tasting menu designed for two, featuring aphrodisiac ingredients and romantic Italian classics. The evening includes candlelight, rose petals, live violin music, and a complimentary photo to remember the night.",
    highlights: [
      "6-course romantic tasting menu",
      "Complimentary champagne toast",
      "Live violin performance",
      "Candlelit ambiance",
      "Professional couple's photo",
      "Rose & chocolate gifts"
    ],
    capacity: 40,
    registered: 38
  }
];

export default function EventsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndices, setCurrentImageIndices] = useState<{[key: string]: number}>({});

  useEffect(() => {
    // Initialize image indices
    const indices: {[key: string]: number} = {};
    eventsData.forEach(event => {
      indices[event.id] = 0;
    });
    setCurrentImageIndices(indices);

    // Setup image rotation for each event
    const interval = setInterval(() => {
      setCurrentImageIndices(prev => {
        const newIndices = { ...prev };
        eventsData.forEach(event => {
          newIndices[event.id] = (prev[event.id] + 1) % event.images.length;
        });
        return newIndices;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const categories = ["All", "Wine Tasting", "Cooking Class", "Special Event", "Exclusive Dining"];
  
  const filteredEvents = selectedCategory === "All" 
    ? eventsData 
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="bg-[#E1D9CB] text-[#821F06] min-h-screen font-serif">
        {/* Hero Section */}
        <div className="pt-16 md:pt-20">
          <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-gradient-to-b from-[#821F06] to-[#E1D9CB] text-white">
            <div className="text-center animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
                UPCOMING EVENTS
              </h1>
              <p className="mt-4 text-lg italic tracking-wide">
                — Authentic Italian Experiences —
              </p>
            </div>
          </section>
        </div>

        {/* Category Filter */}
        <section className="max-w-screen-xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#821F06] text-white shadow-lg"
                    : "bg-white text-[#821F06] hover:bg-[#F9F7F4] shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Events Grid */}
        <section className="max-w-screen-xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => router.push(`/events/${event.id}`)}
              >
                {/* Image Slider */}
                <div className="h-48 overflow-hidden relative">
                  {event.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`${event.title} ${imgIndex + 1}`}
                      className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ${
                        imgIndex === (currentImageIndices[event.id] || 0)
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-110'
                      }`}
                    />
                  ))}
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                    {event.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          imgIndex === (currentImageIndices[event.id] || 0)
                            ? 'bg-white w-6'
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-[#7D8D36] text-white px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                    <span className="text-[#821F06] font-bold text-lg">
                      £{event.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#821F06] mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-[#4A453E]">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(event.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-[#4A453E]">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                  </div>

                  <p className="text-sm text-[#4A453E] mb-4 line-clamp-2">
                    {event.shortDesc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-[#8A837A]">
                      {event.registered}/{event.capacity} registered
                    </div>
                    <button className="text-[#821F06] font-semibold text-sm hover:text-[#7D8D36] transition-colors">
                      View Details →
                    </button>
                  </div>

                  <div className="mt-3 w-full bg-[#E1D9CB] rounded-full h-2">
                    <div 
                      className="bg-[#7D8D36] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}