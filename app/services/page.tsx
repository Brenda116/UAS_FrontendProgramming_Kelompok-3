"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Dine-In Experience",
      icon: "🍽️",
      description: "Enjoy an authentic Italian dining experience in our warm and inviting restaurant atmosphere.",
      features: [
        "Elegant ambiance with Italian decor",
        "Table reservations available",
        "Family-friendly environment",
        "Live music on weekends"
      ],
      image: "/images/dine-in.jpg"
    },
    {
      title: "Takeaway Service",
      icon: "🥡",
      description: "Order your favorite Italian dishes for pickup and enjoy our quality food at home.",
      features: [
        "Quick 20-30 minute preparation",
        "Special takeaway packaging",
        "Order online or by phone",
        "Loyalty rewards program"
      ],
      image: "/images/takeaway.jpg"
    },
    {
      title: "Home Delivery",
      icon: "🚗",
      description: "Fresh, hot Italian food delivered straight to your doorstep within our delivery radius.",
      features: [
        "5-mile delivery radius",
        "30-45 minute delivery time",
        "Track your order online",
        "Contactless delivery available"
      ],
      image: "/images/delivery.jpg"
    },
    {
      title: "Private Events",
      icon: "🎉",
      description: "Host your special occasions with us or let us cater your events with authentic Italian cuisine.",
      features: [
        "Private dining for 20+ guests",
        "Customizable menu options",
        "Corporate event packages",
        "Wedding and party catering"
      ],
      image: "/images/catering.jpg"
    },
    {
      title: "Cooking Classes",
      icon: "👨‍🍳",
      description: "We offer you to learn the art of Italian cooking from our expert chefs in hands-on workshops.",
      features: [
        "Pizza making workshops",
        "Pasta preparation classes",
        "Small group sessions",
        "Take home your creations"
      ],
      image: "/images/cooking-class.jpg"
    },
    {
      title: "Gift Vouchers",
      icon: "🎁",
      description: "You can share the taste of Italy with loved ones through our restaurant gift vouchers.",
      features: [
        "Flexible denominations",
        "Valid for 12 months",
        "Perfect for any occasion",
        "Available for purchase online"
      ],
      image: "/images/gift-voucher.jpg"
    }
  ];

  const [selectedService, setSelectedService] = useState(0);

  return (
    <main className="bg-[var(--cream)] text-[var(--red-dark)] min-h-screen font-playfair">

      <Navbar />  
      
      {/* Hero Section */}
      <div className="pt-31 md:pt-31">
        <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--black)]/40"/>
          <div className="relative text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest animate-fadeIn">
              OUR SERVICES
            </h1>
            <p className="mt-4 text-base md:text-lg italic text-[var(--cream)] tracking-wide animate-fadeIn">
              — Bringing Authentic Italian Flavors to You —
            </p>
          </div>
        </section>
      </div>

      {/* Services Overview */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--red-dark)] mb-4 animate-fadeIn">
            What We Offer
          </h2>
          <p className="text-[var(--gray-dark)] text-lg max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            At Notte Azzurra, we're committed to delivering exceptional Italian culinary experiences 
            through a variety of services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedService(index)}
            >
              {/* Icon Header */}
              <div className="bg-gradient-to-br from-[var(--red)] to-[var(--red-dark)] p-8 text-center">
                <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[var(--gray-dark)] text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[var(--gray-dark)]">
                      <svg 
                        className="w-5 h-5 text-[var(--green)] mr-2 flex-shrink-0 mt-0.5"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-[var(--green)] text-white font-semibold rounded-full hover:bg-[var(--green-light)] transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider Hero */}
      <section className="relative w-full h-[35vh] md:h-[50vh] mx-auto mt-14 flex flex-col items-center justify-center text-center bg-[#821F06] text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-2 text-base italic text-[#E1D9CB] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>


      {/* Featured Service Detail */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-16 px-6">
        <div className="bg-[var(--white)] rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-[var(--red)] to-[var(--red-dark)] flex items-center justify-center">
              <div className="text-9xl">
                {services[selectedService].icon}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--red-dark)] mb-4">
                {services[selectedService].title}
              </h2>
              <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6">
                {services[selectedService].description}
              </p>

              <h3 className="text-xl font-semibold text-[var(--red-dark)] mb-4">
                What's Included:
              </h3>
              <ul className="space-y-3 mb-6">
                {services[selectedService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-[var(--gray-dark)]">
                    <svg 
                      className="w-6 h-6 text-[var(--green)] mr-3 flex-shrink-0 mt-0.5"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.location.href = '/contactloc'}
                className="px-8 py-3 bg-[var(--red-dark)] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[var(--red-light)] transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative w-full h-[50vh] md:h-[60vh] mx-auto my-16 flex flex-col items-center justify-center text-center bg-[var(--red-dark)] text-[var(--white)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/80 to-[var(--black)]/60"/>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest mb-6 animate-fadeIn">
            WHY CHOOSE NOTTE AZZURRA?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fadeIn">
              <div className="text-5xl mb-3">🇮🇹</div>
              <h3 className="text-xl font-semibold mb-2">Authentic Italian</h3>
              <p className="text-[var(--cream)] text-sm">
                Traditional recipes passed down through generations
              </p>
            </div>

            <div className="animate-fadeIn">
              <div className="text-5xl mb-3">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-[var(--cream)] text-sm">
                Skilled culinary artists trained in Italy
              </p>
            </div>

            <div className="animate-fadeIn">
              <div className="text-5xl mb-3">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-[var(--cream)] text-sm">
                Locally sourced, premium quality produce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-16 px-6 mb-16">
        <div className="relative rounded-3xl shadow-xl p-10 md:p-14 text-center text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--red-dark)] to-[var(--red)]" />
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
              Ready to Experience Italian Excellence?
            </h2>
            <p className="text-[var(--cream)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
              Book your table, order delivery, or inquire about our catering services today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/contactloc'}
                className="px-8 py-3 bg-[var(--green)] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[var(--green-light)] transition duration-300"
              >
                Contact Us
              </button>
              <a
                href="tel:+442079460958"
                className="px-8 py-3 bg-white text-[var(--red-dark)] text-lg font-semibold rounded-full shadow-lg hover:bg-[var(--cream)] transition duration-300"
              >
                Call: +44 20 7946 0958
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}