"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
  fullDescription: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Dine-In Experience",
      description: "Enjoy an authentic Italian dining experience in our warm and inviting restaurant atmosphere.",
      features: [
        "Elegant ambiance with Italian decor",
        "Table reservations available",
        "Family-friendly environment",
        "Live music on weekends"
      ],
      image: "/images/dineInServices.jpg",
      fullDescription: "Step into Notte Azzurra and experience the warmth of authentic Italian hospitality. Our dining room features rustic Italian decor, warm lighting, and an inviting atmosphere that makes every guest feel like family. From intimate dinners for two to larger celebrations, our attentive staff ensures impeccable service throughout your visit. Savor our handcrafted pizzas from our wood-fired oven, fresh homemade pasta, and traditional Italian dishes prepared with passion and the finest ingredients. On weekends, enjoy live music that adds to the authentic Italian ambiance. Book your table in advance to secure your preferred time, especially during peak hours and weekends."
    },
    {
      title: "Takeaway Service",
      description: "Order your favorite Italian dishes for pickup and enjoy our quality food at home.",
      features: [
        "Quick 20-30 minute preparation",
        "Special takeaway packaging",
        "Order online or by phone",
        "Loyalty rewards program"
      ],
      image: "/images/takeawayServices.jpg",
      fullDescription: "Craving Notte Azzurra but prefer dining at home? Our takeaway service brings the authentic flavors of Italy right to your table. We have perfected our packaging system to ensure every dish arrives in perfect condition. Simply place your order online through our user-friendly website or call us directly, and your meal will be expertly prepared and ready for pickup in just 20-30 minutes. Our takeaway menu features all your favorite dishes, from our signature pizzas and fresh pasta to appetizers and desserts. Join our loyalty rewards program to earn points with every order and enjoy exclusive discounts. Perfect for family dinners, movie nights, or when you simply want restaurant-quality Italian food in the comfort of your home."
    },
    {
      title: "Home Delivery",
      description: "Fresh, hot Italian food delivered straight to your doorstep within our delivery radius.",
      features: [
        "5-mile delivery radius",
        "30-45 minute delivery time",
        "Track your order online",
        "Contactless delivery available"
      ],
      image: "/images/deliveryServices.jpg",
      fullDescription: "Experience Notte Azzurra's exceptional Italian cuisine without leaving your home. Our professional delivery service covers a 5-mile radius around our restaurant, bringing fresh, hot food directly to your doorstep within 30-45 minutes. We use insulated delivery bags and specialized packaging to ensure your food maintains its perfect temperature and quality during transit. Track your order in real-time through our website. You will know exactly when your delicious Italian meal will arrive. We offer contactless delivery options for your peace of mind and safety. Our delivery menu includes our full range of pizzas, pasta dishes, appetizers, salads, and desserts. Order through our website, mobile app, or by phone. Whether it is a busy weeknight dinner, a weekend treat, or feeding a group, Notte Azzurra delivery brings authentic Italian flavors to you."
    },
    {
      title: "Private Events",
      description: "Host your special occasions with us or let us cater your events with authentic Italian cuisine.",
      features: [
        "Private dining for 20+ guests",
        "Customizable menu options",
        "Corporate event packages",
        "Wedding and party catering"
      ],
      image: "/images/privateEventServices.jpg",
      fullDescription: "Transform your special event into an unforgettable Italian celebration with Notte Azzurra's private dining and catering services. Our elegant private dining area accommodates groups of 20 or more, providing an intimate setting with dedicated service for your exclusive use. Alternatively, we can bring our authentic Italian cuisine to your chosen venue. Work directly with our experienced event team to create a customized menu that perfectly matches your occasion, dietary requirements, and budget. We cater to all types of events including corporate meetings, wedding receptions, birthday celebrations, and family reunions. Each event includes professional setup, elegant presentation, attentive service staff, and complete cleanup. Contact us at least 2 weeks in advance to discuss your event details. Let Notte Azzurra make your celebration truly memorable with authentic Italian hospitality and exceptional cuisine."
    },
    {
      title: "Cooking Classes",
      description: "We offer you to learn the art of Italian cooking from our expert chefs in hands-on workshops.",
      features: [
        "Pizza making workshops",
        "Pasta preparation classes",
        "Small group sessions",
        "Take home your creations"
      ],
      image: "/images/cookingClassServices.jpg",
      fullDescription: "Unlock the secrets of authentic Italian cooking with hands-on classes led by Notte Azzurra's expert chefs. Our intimate cooking workshops are designed for food enthusiasts of all skill levels. Each class focuses on specific Italian culinary skills such as mastering the art of pizza making, learning traditional pasta preparation, or exploring authentic Italian sauces. Classes are kept intentionally small with maximum 12 participants to ensure personalized attention and plenty of hands-on practice. You will work in our professional kitchen using the same high-quality ingredients we use in our restaurant. Our chefs share traditional techniques, family recipes, and insider tips passed down through generations. The best part? You get to enjoy and take home everything you create! Classes typically run 2-3 hours and include all ingredients, equipment, recipes to take home, and a complimentary glass of Italian wine. Perfect for date nights, team-building activities, or anyone passionate about Italian cuisine. Book your spot today as classes fill up quickly!"
    },
    {
      title: "Gift Vouchers",
      description: "You can share the taste of Italy with loved ones through our restaurant gift vouchers.",
      features: [
        "Flexible denominations",
        "Valid for 12 months",
        "Perfect for any occasion",
        "Available for purchase online"
      ],
      image: "/images/giftServices.jpg",
      fullDescription: "Share the joy of exceptional Italian dining with Notte Azzurra gift vouchers. Our beautifully designed vouchers can be purchased in any denomination from £25 to £500, making them suitable for any budget and celebration. Whether it is a birthday, anniversary, wedding gift, holiday present, or corporate gift, a Notte Azzurra voucher offers the gift of choice and unforgettable experiences. Recipients can use their voucher for any of our services including dine-in meals, takeaway orders, home delivery, cooking classes, or private event bookings. All vouchers are valid for 12 months from the date of purchase. Purchase conveniently online through our secure website and receive a digital voucher instantly via email, or visit our restaurant to purchase a physical voucher in an elegant presentation envelope. Vouchers can be personalized with a custom message to make your gift extra special. Corporate bulk orders available with customized branding options. Give the gift of authentic Italian dining excellence!"
    }
  ];

  const [selectedService, setSelectedService] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalService, setModalService] = useState<Service | null>(null);

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedService((prev) => (prev + 1) % services.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setSelectedService((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setSelectedService((prev) => (prev - 1 + services.length) % services.length);
  };

  const openModal = (service: Service) => {
    setModalService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalService(null);
  };

  return (
    <main className="bg-[var(--cream)] text-[var(--red-dark)] min-h-screen font-playfair">

      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-31 md:pt-31">
        <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--black)]/40"/>
          <div className="relative text-center px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold tracking-widest animate-fadeIn">
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[var(--red-dark)] mb-4 animate-fadeIn">
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
              className="group bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Header with Background */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                />
                <div className="absolute inset-0 bg-black/50" />
                
                <div className="relative h-full flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[var(--cream)] text-center px-4">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-[var(--gray-dark)] text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 text-left">
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

                <button 
                  onClick={() => openModal(service)}
                  className="w-full py-3 bg-[var(--red-dark)] text-white font-playfair rounded-full hover:bg-[var(--red)] transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && modalService && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${modalService.image}')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--red)]/80 to-[var(--red-dark)]/90" />
              
              <div className="relative h-full flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white text-center px-6">
                  {modalService.title}
                </h2>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6">
                {modalService.fullDescription}
              </p>

              <h3 className="text-xl font-playfair text-[var(--red-dark)] mb-4">
                Key Features:
              </h3>
              <ul className="space-y-3 mb-6">
                {modalService.features.map((feature, idx) => (
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

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => window.location.href = '/contactloc'}
                  className="flex-1 px-6 py-3 bg-[var(--red-dark)] text-white text-lg font-playfair rounded-full shadow-lg hover:bg-[var(--red)] transition duration-300"
                >
                  Book Now
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 bg-[var(--cream)] text-[var(--red-dark)] text-lg font-playfair rounded-full shadow-lg hover:bg-[var(--gray-light)] transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider Hero */}
      <section className="relative w-full h-[35vh] md:h-[50vh] mx-auto mt-14 flex flex-col items-center justify-center text-center bg-[var(--red-dark)] text-[var(--white)]">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-2 text-base italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>

      {/* Featured Service Detail - Slideshow */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-16 px-6">
        <div className="relative bg-[var(--white)] rounded-3xl shadow-xl overflow-hidden">

          <div className="flex flex-col md:flex-row">
            {/* Image with Background */}
            <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `url('${services[selectedService].image}')`
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="relative h-full flex items-center justify-center p-8">
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--cream)] text-center transition-all duration-700">
                  {services[selectedService].title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[var(--red-dark)] mb-4 transition-all duration-700">
                Featured Service
              </h2>
              <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6 transition-all duration-700">
                {services[selectedService].description}
              </p>

              <h3 className="text-xl font-playfair text-[var(--red-dark)] mb-4">
                What's Included:
              </h3>
              <ul className="space-y-3 mb-6">
                {services[selectedService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-[var(--gray-dark)] transition-all duration-700">
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
                className="px-8 py-3 bg-[var(--red-dark)] text-white text-lg font-playfair rounded-full shadow-lg hover:bg-[var(--red)] transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`transition-all duration-300 rounded-full ${
                  selectedService === index 
                    ? 'bg-[var(--green)] w-8 h-3' 
                    : 'bg-white/50 w-3 h-3 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative w-full h-[50vh] md:h-[60vh] mx-auto my-16 flex flex-col items-center justify-center text-center bg-[var(--red-dark)] text-[var(--white)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/80 to-[var(--black)]/60"/>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl text-[var(--gold)] font-playfair font-bold tracking-widest mb-6 animate-fadeIn">
            WHY CHOOSE NOTTE AZZURRA?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fadeIn">
              <div className="text-5xl mb-3">🤌</div>
              <h3 className="text-xl font-playfair mb-2">Authentic Italian</h3>
              <p className="text-[var(--cream)] text-sm">
                Traditional recipes passed down through generations
              </p>
            </div>

            <div className="animate-fadeIn">
              <div className="text-5xl mb-3">👨‍🍳</div>
              <h3 className="text-xl font-playfair mb-2">Expert Chefs</h3>
              <p className="text-[var(--cream)] text-sm">
                Skilled culinary artists trained in Italy
              </p>
            </div>

            <div className="animate-fadeIn">
              <div className="text-5xl mb-3">🌿</div>
              <h3 className="text-xl font-playfair mb-2">Fresh Ingredients</h3>
              <p className="text-[var(--cream)] text-sm">
                Locally sourced, premium quality produce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-16 px-6 mb-16">
        <div className="relative rounded-3xl shadow-xl p-10 md:p-14 text-center text-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/images/servicesBawah.jpg')] bg-center"></div>
          <div className="absolute inset-0 bg-black/55"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 animate-fadeIn">
              Ready to Experience Italian Excellence?
            </h2>
            <p className="text-[var(--cream)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
              Book your table, order delivery, or inquire about our catering services today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/contactloc'}
                className="px-8 py-3 bg-[var(--green)] text-white text-lg font-playfair rounded-full shadow-lg hover:bg-[var(--green-light)] transition duration-300"
              >
                Contact Us
              </button>
              <a
                href="tel:+442079460958"
                className="px-8 py-3 bg-white text-[var(--red-dark)] text-lg font-playfair rounded-full shadow-lg hover:bg-[var(--cream)] transition duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}