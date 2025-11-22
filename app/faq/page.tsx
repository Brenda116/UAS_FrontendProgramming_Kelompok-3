"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "General Information",
      questions: [
        {
          question: "What are your opening hours?",
          answer: "We are open Monday to Saturday from 11:00 AM to 10:00 PM, and Sunday from 12:00 PM to 9:00 PM. We recommend making a reservation, especially on weekends."
        },
        {
          question: "Do you offer vegetarian or vegan options?",
          answer: "Yes! We offer a variety of vegetarian pizzas and pasta dishes. We also have vegan cheese available upon request for our pizzas. Please inform our staff about any dietary requirements when ordering."
        },
        {
          question: "Do you accept walk-ins or do I need a reservation?",
          answer: "We welcome both walk-ins and reservations. However, during peak hours and weekends, we highly recommend making a reservation to ensure a table is available for you."
        }
      ]
    },
    {
      category: "Menu & Ordering",
      questions: [
        {
          question: "What types of pizza do you serve?",
          answer: "We serve authentic Italian pizzas including classics like Margherita, Quattro Formaggi, Diavola, and Capricciosa. We also offer seasonal specials featuring fresh, locally-sourced ingredients."
        },
        {
          question: "Can I customize my pizza?",
          answer: "Absolutely! You can add or remove toppings according to your preference. Additional charges may apply for extra toppings. Our staff will be happy to help you create your perfect pizza."
        },
        {
          question: "Do you offer gluten-free pizza options?",
          answer: "Yes, we offer gluten-free pizza bases for customers with gluten sensitivity or celiac disease. Please note that while we take precautions, our kitchen does handle gluten products."
        }
      ]
    },
    {
      category: "Delivery & Takeaway",
      questions: [
        {
          question: "Do you offer delivery services?",
          answer: "Yes, we offer delivery within a 5-mile radius of our restaurant. You can order through our website or popular delivery platforms. Minimum order value applies for delivery."
        },
        {
          question: "Can I order takeaway?",
          answer: "Yes! You can call us directly to place a takeaway order or order through our website. Your food will be ready for collection within 20-30 minutes depending on order complexity."
        },
        {
          question: "What is your delivery time?",
          answer: "Standard delivery time is 30-45 minutes depending on your location and current order volume. We'll provide you with an estimated delivery time when you place your order."
        }
      ]
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, all major credit and debit cards (Visa, Mastercard, American Express), and contactless payments including Apple Pay and Google Pay."
        },
        {
          question: "Do you offer any discounts or loyalty programs?",
          answer: "Yes! We have a loyalty card program where you earn points with every purchase. We also offer student discounts (15% off with valid ID) and special promotions throughout the year."
        },
        {
          question: "Is service charge included in the bill?",
          answer: "A discretionary 10% service charge is added to your bill for dine-in customers. This is optional and can be removed upon request. All service charges go directly to our staff."
        }
      ]
    },
    {
      category: "Special Events & Catering",
      questions: [
        {
          question: "Do you cater for private events?",
          answer: "Yes! We offer catering services for private events, corporate functions, and parties. We can customize a menu to suit your needs and budget. Contact us for more details."
        },
        {
          question: "Can I book the restaurant for a private party?",
          answer: "We offer private dining options for groups of 20 or more. Please contact us at least 2 weeks in advance to discuss availability and menu options."
        },
        {
          question: "Do you host special events or themed nights?",
          answer: "Yes! We regularly host Italian wine tasting nights, live music evenings, and seasonal celebrations. Follow our social media pages to stay updated on upcoming events."
        }
      ]
    }
  ];

  return (
    <main className="bg-[var(--cream)] text-[var(--red-dark)] min-h-screen font-playfair">

      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-31 md:pt-31">
        <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--black)]/40"/>
          <div className="relative text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest animate-fadeIn">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="mt-4 text-base md:text-lg italic text-[var(--cream)] tracking-wide animate-fadeIn">
              — Your Questions, Answered —
            </p>
          </div>
        </section>
      </div>

      {/* Quick Stats Cards */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[var(--white)] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
          <div className="text-5xl font-bold text-[var(--red)] mb-3 animate-fadeIn">15+</div>
          <div className="text-[var(--gray-dark)] text-lg animate-fadeIn">Pizza Varieties</div>
        </div>

        <div className="bg-[var(--white)] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
          <div className="text-5xl font-bold text-[var(--green)] mb-3 animate-fadeIn">30min</div>
          <div className="text-[var(--gray-dark)] text-lg animate-fadeIn">Average Prep Time</div>
        </div>

        <div className="bg-[var(--white)] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
          <div className="text-5xl font-bold text-[var(--red)] mb-3 animate-fadeIn">5★</div>
          <div className="text-[var(--gray-dark)] text-lg animate-fadeIn">Customer Rating</div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-12 px-6">
        <div className="bg-[var(--white)] rounded-3xl shadow-lg p-8 md:p-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--red-dark)] mb-6 pb-4 border-b-4 border-[var(--green)] animate-fadeIn">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                        isOpen ? 'border-[var(--green)] shadow-md' : 'border-[var(--gray-light)]'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className={`w-full px-6 py-5 text-left flex justify-between items-center transition-all duration-300 ${
                          isOpen 
                            ? 'bg-[var(--green)] text-white' 
                            : 'bg-white text-[var(--black)] hover:bg-[var(--cream)]'
                        }`}
                      >
                        <span className="text-lg font-semibold pr-4">{item.question}</span>
                        <svg
                          className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 py-5 bg-[var(--cream)] text-[var(--gray-dark)] text-base leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-[90%] md:max-w-6xl mx-auto my-12 px-6 mb-16">
        <div className="relative rounded-3xl shadow-xl p-10 md:p-14 text-center text-white overflow-hidden">

          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/images/faqBawah.jpeg')] bg-center"></div>
          <div className="absolute inset-0 bg-black/55"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
              Still Have Questions?
            </h2>

            <p className="text-[var(--cream)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
              Our team is here to help! Feel free to reach out through any of our contact channels.
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