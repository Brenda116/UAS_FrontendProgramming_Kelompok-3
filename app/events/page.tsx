"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  time: string;
  price: number;
  category: string;
  images: string[];
  highlights: string[];
  shortDesc: string;
  fullDesc: string;
  capacity: number;
  registered: number;
}

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndices, setCurrentImageIndices] = useState<{[key: string]: number}>({});

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        
        if (data.success && data.events) {
          setEvents(data.events);
          
          // Initialize image indices
          const indices: {[key: string]: number} = {};
          data.events.forEach((event: Event) => {
            indices[event.slug] = 0;
          });
          setCurrentImageIndices(indices);
        } else {
          setError("Failed to load events");
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Image slider effect
  useEffect(() => {
    if (events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndices(prev => {
        const newIndices = { ...prev };
        events.forEach(event => {
          const images = Array.isArray(event.images) ? event.images : [];
          if (images.length > 0) {
            newIndices[event.slug] = (prev[event.slug] + 1) % images.length;
          }
        });
        return newIndices;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [events]);

  // Get unique categories from events
  const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];
  
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="bg-[#E1D9CB] text-[#821F06] min-h-screen font-serif">
          <div className="pt-16 md:pt-20">
            <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-gradient-to-b from-[#821F06] to-[#E1D9CB] text-white">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
                <p className="mt-4 text-lg">Loading events...</p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <main className="bg-[#E1D9CB] text-[#821F06] min-h-screen font-serif">
          <div className="pt-16 md:pt-20">
            <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-gradient-to-b from-[#821F06] to-[#E1D9CB] text-white">
              <div className="text-center">
                <p className="text-lg">{error}</p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-[#4A453E]">No events found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => {
                const images = Array.isArray(event.images) ? event.images : [];
                const currentImageIndex = currentImageIndices[event.slug] || 0;
                
                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => router.push(`/events/${event.slug}`)}
                  >
                    {/* Image Slider */}
                    <div className="h-48 overflow-hidden relative bg-gray-200">
                      {images.length > 0 ? (
                        <>
                          {images.map((img, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={img}
                              alt={`${event.title} ${imgIndex + 1}`}
                              className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ${
                                imgIndex === currentImageIndex
                                  ? 'opacity-100 scale-100'
                                  : 'opacity-0 scale-110'
                              }`}
                            />
                          ))}
                          
                          {/* Image Indicators */}
                          {images.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                              {images.map((_, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    imgIndex === currentImageIndex
                                      ? 'bg-white w-6'
                                      : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
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
                );
              })}
            </div>
          )}
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

        {/* Social Media & Benefits Section */}
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
                    Post your Notte Azzura experience on Instagram or TikTok and tag us to get <span className="font-bold text-2xl bg-white/20 px-2 py-1 rounded">15% OFF</span> your next event booking!
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Tag @notteazzura in your stories or posts</span>
                    </div>
                    <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Use hashtag #NotteMoments</span>
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
                      NOTTEAZR
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