"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  capacity: number;
  registered: number;
}

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    message: ""
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${params.slug}`);
        if (!response.ok) {
          router.push('/events');
          return;
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
        router.push('/events');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchEvent();
    }
  }, [params.slug, router]);

  useEffect(() => {
    if (!event) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [event]);

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: name === "guests" ? Number(value) : value
  }));
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: Number(event?.id),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          guests: Number(formData.guests),
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: 1,
          message: "",
        });
        setTimeout(() => {
          setFormStatus("");
          setShowRegistration(false);
          window.location.reload();
        }, 1500);
      } else {
        console.error("Error:", data.error);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error registering:", error);
      setFormStatus("error");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="bg-[#E1D9CB] min-h-screen flex items-center justify-center">
          <div className="text-[#821F06] text-2xl font-serif">Loading event details...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!event) {
    return null;
  }

  const spotsLeft = event.capacity - event.registered;
  const isAlmostFull = spotsLeft <= 5;
  const isFull = spotsLeft <= 0;

  return (
    <>
      <Navbar />
      <main className="bg-[#E1D9CB] text-[#821F06] min-h-screen font-serif">
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}</style>

        {/* Hero Image Gallery */}
        <div className="pt-16 md:pt-20">
          <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
            {event.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${event.title} ${index + 1}`}
                className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ${
                  index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              />
            ))}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <div className="max-w-screen-xl mx-auto">
                <span className="inline-block bg-[#7D8D36] text-white px-4 py-2 rounded-full text-sm mb-4">
                  {event.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                  {event.title}
                </h1>
                <p className="text-lg md:text-xl text-[#E1D9CB] animate-fadeIn">
                  {event.shortDesc}
                </p>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              {event.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Main Content */}
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Event Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-fadeIn">
                <h2 className="text-2xl font-bold text-[#821F06] mb-6">Event Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#7D8D36] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[#8A837A] mb-1">Date</p>
                      <p className="font-semibold text-[#821F06]">
                        {new Date(event.date).toLocaleDateString('en-GB', { 
                          weekday: 'long',
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#7D8D36] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[#8A837A] mb-1">Time</p>
                      <p className="font-semibold text-[#821F06]">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#7D8D36] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[#8A837A] mb-1">Price</p>
                      <p className="font-semibold text-[#821F06] text-2xl">£{event.price}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#E1D9CB] pt-6">
                  <h3 className="text-xl font-semibold text-[#821F06] mb-4">About This Event</h3>
                  <p className="text-[#4A453E] leading-relaxed whitespace-pre-line">
                    {event.fullDesc}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-fadeIn">
                <h2 className="text-2xl font-bold text-[#821F06] mb-6">What's Included</h2>
                <ul className="space-y-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#7D8D36] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#4A453E]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 animate-fadeIn">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#8A837A] mb-2">Price per person</p>
                  <p className="text-4xl font-bold text-[#821F06]">£{event.price}</p>
                </div>

                <div className="mb-6 p-4 bg-[#F9F7F4] rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#8A837A]">Availability</span>
                    <span className={`text-sm font-semibold ${isFull ? 'text-red-600' : isAlmostFull ? 'text-orange-600' : 'text-[#7D8D36]'}`}>
                      {isFull ? 'Sold Out' : `${spotsLeft} spots left`}
                    </span>
                  </div>
                  <div className="w-full bg-[#E1D9CB] rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${isFull ? 'bg-red-600' : 'bg-[#7D8D36]'}`}
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[#8A837A] mt-2 text-center">
                    {event.registered} / {event.capacity} registered
                  </p>
                </div>

                {!showRegistration ? (
                  <button
                    onClick={() => setShowRegistration(true)}
                    disabled={isFull}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      isFull 
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-[#821F06] text-white hover:bg-[#601504] hover:shadow-xl transform hover:-translate-y-1'
                    }`}
                  >
                    {isFull ? 'Event Full' : 'Register Now'}
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition"
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition"
                    />
                    
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition"
                    />
                    
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                    
                    <textarea
                      name="message"
                      placeholder="Special requests (optional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition resize-none"
                    />

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowRegistration(false)}
                        className="flex-1 py-3 border-2 border-[#821F06] text-[#821F06] rounded-full font-semibold hover:bg-[#F9F7F4] transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={formStatus === "sending"}
                        className="flex-1 py-3 bg-[#821F06] text-white rounded-full font-semibold hover:bg-[#601504] transition"
                      >
                        {formStatus === "sending" ? "Sending..." : "Confirm"}
                      </button>
                    </div>

                    {formStatus === "success" && (
                      <div className="text-center text-[#7D8D36] font-medium text-sm animate-fadeIn">
                        ✓ Registration successful! Check your email for confirmation.
                      </div>
                    )}
                    
                    {formStatus === "error" && (
                      <div className="text-center text-red-600 font-medium text-sm animate-fadeIn">
                        ✗ Registration failed. Please try again.
                      </div>
                    )}
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-[#E1D9CB]">
                  <button
                    onClick={() => router.push('/events')}
                    className="w-full text-[#821F06] font-semibold hover:text-[#7D8D36] transition"
                  >
                    ← Back to all events
                  </button>
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