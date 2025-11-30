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
      "https://i.pinimg.com/736x/5d/09/49/5d0949ec57cd170a57ccdf0cec883adc.jpg",
      "https://i.pinimg.com/736x/ad/10/14/ad101499e074b15d605d422b47b0f07e.jpg",
      "https://i.pinimg.com/1200x/7c/0c/f2/7c0cf209dd721ee2910fca0d2dd948e3.jpg"
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
      "https://i.pinimg.com/736x/40/a9/79/40a97975515355dbd31414342fad0551.jpg",
      "https://i.pinimg.com/736x/71/36/eb/7136eb9da7a8994cf7e9a72fb14b8f2d.jpg",
      "https://i.pinimg.com/1200x/16/37/51/163751e53c4f337b50b0eb9694181ef2.jpg"
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
      "https://i.pinimg.com/736x/b8/8a/e3/b88ae3d84b8e6ab6a9e48d1d7ec6ca03.jpg",
      "https://i.pinimg.com/1200x/5d/14/91/5d1491a24c8196b0769937b00bd86e5d.jpg",
      "https://i.pinimg.com/1200x/73/0a/a3/730aa3928989fc1eb7190b9c6d9696f2.jpg"
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
      "https://i.pinimg.com/736x/47/6f/03/476f03fc95aef01ed4d325a7a268b326.jpg",
      "https://i.pinimg.com/1200x/c2/77/79/c27779e635f81dfb4e8616f2b6fd938e.jpg",
      "https://i.pinimg.com/736x/08/31/ab/0831ab19fc584c959fd5f3c65295b9a4.jpg"
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
      "https://i.pinimg.com/1200x/2b/f1/a7/2bf1a72cfc7751189e7e53bdbbdcd1cb.jpg",
      "https://i.pinimg.com/1200x/8b/51/e6/8b51e6e5b768cc4e0de632f50f12502e.jpg",
      "https://i.pinimg.com/736x/f8/ad/7f/f8ad7f7e36cfd2862ef35f836bff33e5.jpg"
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
      "https://i.pinimg.com/736x/f3/7e/e2/f37ee2e13dee690aeac94a13c20cb197.jpg",
      "https://i.pinimg.com/1200x/69/04/2d/69042da0fa206eb5c96ddc1f50c4a541.jpg",
      "https://i.pinimg.com/736x/7c/15/bf/7c15bfad4d44b1775ccc71cd2cf25899.jpg"
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

      {/* Divider Hero */}
      <section className="relative w-full h-[35vh] md:h-[50vh] mx-auto mt-12 flex flex-col items-center justify-center text-center bg-[#821F06] text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-2 text-base italic text-[#E1D9CB] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>

        <section className="bg-gradient-to-b from-[#E1D9CB] via-[#D4CABC] to-[#C9BFB1] py-16">
          <div className="max-w-screen-xl mx-auto px-6">
            {/* Social Media Promotion */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              {/* Share & Get Discount */}
              <div className="bg-gradient-to-br from-[#821F06] to-[#A52808] rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-full transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Share & Save</h3>
                  </div>
                  
                  <p className="text-lg mb-6 leading-relaxed">
                    Post your Savor experience on Instagram or TikTok and tag us to get <span className="font-bold text-2xl bg-white/20 px-2 py-1 rounded">15% OFF</span> your next event booking!
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Tag @savorsoho in your stories or posts</span>
                    </div>
                    <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Use hashtag #SavorMoments</span>
                    </div>
                    <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Show us your post for instant discount</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Referral Program */}
              <div className="bg-gradient-to-br from-[#7D8D36] to-[#5A6428] rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-full transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Bring Friends</h3>
                  </div>
                  
                  <p className="text-lg mb-6 leading-relaxed">
                    Refer a friend and you both get <span className="font-bold text-2xl bg-white/20 px-2 py-1 rounded">£10 OFF</span> on your next event booking. The more friends, the more savings!
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 transition-all duration-300 hover:bg-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-90">Your Referral Code:</span>
                      <button className="text-xs bg-white/20 hover:bg-white/40 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105">
                        Copy
                      </button>
                    </div>
                    <div className="font-mono text-xl font-bold tracking-wider">
                      SAVOR2024
                    </div>
                  </div>
                  
                  <p className="text-sm opacity-90">
                    Share your unique code with friends via WhatsApp, email, or social media!
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Benefits Bar */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-[#821F06]/10 p-3 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-[#821F06]/20 group-hover:scale-110">
                    <svg className="w-6 h-6 text-[#821F06] transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                    </svg>
                  </div>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <h4 className="font-semibold text-[#821F06] mb-1">Birthday Special</h4>
                    <p className="text-sm text-[#4A453E]">Celebrate with us and get a complimentary dessert on your special day!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-[#7D8D36]/10 p-3 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-[#7D8D36]/20 group-hover:scale-110">
                    <svg className="w-6 h-6 text-[#7D8D36] transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <h4 className="font-semibold text-[#7D8D36] mb-1">Loyalty Rewards</h4>
                    <p className="text-sm text-[#4A453E]">Attend 5 events and unlock VIP status with exclusive perks!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-[#821F06]/10 p-3 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-[#821F06]/20 group-hover:scale-110">
                    <svg className="w-6 h-6 text-[#821F06] transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                  </div>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <h4 className="font-semibold text-[#821F06] mb-1">Early Bird Access</h4>
                    <p className="text-sm text-[#4A453E]">Get notified 48 hours before public event announcements!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}