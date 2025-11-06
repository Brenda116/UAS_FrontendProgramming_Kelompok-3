"use client";
import { useState } from "react";

interface Staff {
  id: number;
  name: string;
  role: string;
  category: "kitchen" | "service" | "cleaning";
  image: string;
}

export default function OurHistoryPage() {

  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--black)] font-[var(--font-playfair)]">
    
    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/70 to-[var(--black)]/60" />
            <h1 className="relative text-6xl md:text-7xl font-bold tracking-widest text-center font-[var(--font-playfair)] animate-fadeIn">
                Our History
            </h1>
    </section>

    {/* Title Section - The Story Behind Notte Azzura */}
    <section className="max-w-screen-2xl mx-auto mt-20 px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] text-right animate-fadeIn">
            The Story Behind Notte Azzura
        </h2>
        <div className="w-60 h-1 bg-[var(--green-dark)] mt-4 rounded-full ml-auto"></div>
    </section>

    {/* History Card */}
    <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[650px] animate-fadeIn">
        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
                src="/images/Sustainability.jpg"
                alt="History of Notte Azzura"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                <p>
                    <strong>Notte Azzura</strong> was born in the heart of London in 1985, when a group of Italian friends
                    decided to bring the warmth, flavor, and hospitality of their homeland to the bustling city.
                    United by their love of food, music, and togetherness, they envisioned a place where every guest
                    could experience <em>la dolce vita</em> — the sweet life.
                </p>
                <p>
                    What began as a humble trattoria quickly became a beloved gathering spot for locals and travelers alike.
                    From its first wood-fired pizza to its signature handmade pasta, every dish carried a piece of Italy’s
                    soul. Over time, Notte Azzura grew into a symbol of authenticity, passion, and community — values that
                    remain at the heart of everything we do.
                </p>
                <p>
                    Today, Notte Azzura continues to share its story through every plate served, blending timeless traditions
                    with modern culinary creativity. From London to beyond, our mission remains the same — to bring people
                    together over unforgettable meals, laughter, and the spirit of Italy.
                </p>
            </div>
        </div>
    </section>

    {/* Title Section - Notte Azzura’s Founders */}
    <section className="max-w-screen-2xl mx-auto mt-20 px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] text-left animate-fadeIn">
            Notte Azzura’s Founders
        </h2>
    <div className="w-60 h-1 bg-[var(--green-dark)] mt-4 rounded-full"></div>
    </section>

    {/* Founder 01 */}
    <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-20 max-w-screen-2xl h-auto md:h-[600px] animate-fadeIn">
        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
                src="/images/Founder01.jpg"
                alt="Founder of Notte Azzura"
                className="w-full h-150 md:h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--green-dark)] mb-6">
                Giovanni Russo
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                <p>
                    Born in a small town near Naples, <strong>Giovanni Russo</strong> grew up surrounded
                    by the aroma of wood-fired pizzas and the laughter of family gatherings. His dream was
                    simple — to bring the warmth, flavor, and tradition of true Italian dining to people
                    across the world.
                </p>
                <p>
                    In 1985, Giovanni opened the first <em>Notte Azzura</em> in London. His passion for
                    authentic recipes, crafted from fresh ingredients and shared with love, quickly turned
                    a small trattoria into one of the most beloved Italian dining experiences in the city.
                </p>
            </div>

            {/* View More Button */}
            <a
                href={`./OurHistory/founders/1`}
                className="mt-6 inline-block px-6 py-3 bg-[var(--red-dark)] text-[var(--white)] font-semibold rounded-full shadow-lg hover:bg-[var(--red)] transition duration-300"
            >
                View More
            </a>
        </div>
    </section>

    {/* Founder 2 */}
    <section className="flex flex-col md:flex-row-reverse bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[600px] animate-fadeIn">
        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
                src="/images/Founder02.jpg"
                alt="Co-Founder of Notte Azzura"
                className="w-full h-150 md:h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6">
                Sam Fisher
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                <p>
                    <strong>Sam Fisher</strong> was the creative heart behind Notte Azzura’s atmosphere
                    and culinary soul. Raised in Florence, he mastered the art of balancing beauty and
                    simplicity — from the flavors on the plate to the design of every restaurant space.
                </p>
                <p>
                    His partnership with Giovanni brought together passion and precision. Sam’s
                    vision of Italian elegance helped shape Notte Azzura into more than a restaurant —
                    it became an experience, where every guest feels like part of the family.
                </p>
            </div>

            {/* View More Button */}
            <a
                href={`./OurHistory/founders/2`}
                className="mt-6 inline-block px-6 py-3 bg-[var(--green-dark)] text-[var(--white)] font-semibold rounded-full shadow-lg hover:bg-[var(--green)] transition duration-300"
            >
                View More
            </a>
        </div>
    </section>

    {/* Founder 3 */}
    <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-20 max-w-screen-2xl h-auto md:h-[600px] animate-fadeIn">
        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
                src="/images/Founder03.jpg"
                alt="Co-Founder of Notte Azzura"
                className="w-full h-150 md:h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--green-dark)] mb-6">
                Lucia Bianchi
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
            <p>
                <strong>Lucia Bianchi</strong> brought a touch of artistry and heart to Notte Azzura’s culinary
                creations. Growing up in Rome, she spent her youth exploring family kitchens and perfecting
                traditional recipes passed down through generations.
            </p>
            <p>
                Her innovative take on classic Italian dishes helped the restaurant evolve while maintaining
                its soul — blending nostalgia with creativity and turning every meal into an experience to remember.
            </p>
            </div>

            {/* View More Button */}
            <a
                href={`./OurHistory/founders/3`}
                className="mt-6 inline-block px-6 py-3 bg-[var(--red-dark)] text-[var(--white)] font-semibold rounded-full shadow-lg hover:bg-[var(--red)] transition duration-300"
            >
                View More
            </a>
        </div>
    </section>

    {/* Founder 4 */}
    <section className="flex flex-col md:flex-row-reverse bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[600px] animate-fadeIn">
        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
                src="/images/Founder04.jpg"
                alt="Co-Founder of Notte Azzura"
                className="w-full h-140 md:h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6">
                Marco DeLuca
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                <p>
                    <strong>Marco DeLuca</strong> was the driving force behind Notte Azzura’s expansion and quality
                    standards. With a background in hospitality and business, Marco ensured that every restaurant
                    reflected the same warmth and excellence as the original.
                </p>
                <p>
                    His leadership and dedication to the brand’s values built a culture of passion, integrity, and
                    service that continues to define Notte Azzura to this day.
                </p>
            </div>

            {/* View More Button */}
            <a
                href={`./OurHistory/founders/4`}
                className="mt-6 inline-block px-6 py-3 bg-[var(--green-dark)] text-[var(--white)] font-semibold rounded-full shadow-lg hover:bg-[var(--green)] transition duration-300"
            >
                View More
            </a>
        </div>
    </section>

    {/* Founder 5 */}
    <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-20 max-w-screen-2xl h-auto md:h-[600px] animate-fadeIn">
        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
                src="/images/Founder05.jpg"
                alt="Co-Founder of Notte Azzura"
                className="w-full h-180 md:h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--green-dark)] mb-6">
                Alessandro Moretti
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                <p>
                    <strong>Alessandro Moretti</strong> carried the Notte Azzura legacy into the modern age.
                    A visionary chef with a deep respect for Italian tradition, Alessandro introduced sustainable
                    sourcing and innovative techniques to the kitchen without losing the brand’s authentic charm.
                </p>
                <p>
                    His philosophy — “every dish tells a story” — continues to guide Notte Azzura’s journey,
                    blending heritage with progress for generations to come.
                </p>
            </div>

            {/* View More Button */}
            <a
                href={`./OurHistory/founders/5`}
                className="mt-6 inline-block px-6 py-3 bg-[var(--red-dark)] text-[var(--white)] font-semibold rounded-full shadow-lg hover:bg-[var(--red)] transition duration-300"
            >
                View More
            </a>
        </div>
    </section>

    {/* Divider */}
    <section className="relative w-full h-[5vh] mx-auto mt-20 bg-[var(--red-dark)] flex items-center justify-center"></section>

    {/* Memorable Moments */}
    <section className="max-w-screen-2xl mx-auto mt-20 px-6 md:px-16">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] text-left animate-fadeIn">
            Memorable Moments
        </h2>
        <p className="text-left text-lg md:text-1xl text-[var(--gray-dark)] mt-2 tracking-widest italic animate-fadeIn">
            — From 1985 until today, milestones that shaped Notte Azzura —
        </p>
        <div className="w-60 h-1 bg-[var(--green-dark)] mt-4 rounded-full ml-0"></div>

        {/* Sliding Image */}
        <div className="mt-12 flex overflow-x-auto space-x-6 pb-6 scroll-smooth snap-x snap-mandatory no-scrollbar animate-fadeIn">
        {[
            { year: 1985, 
            title: "First Notte Azzura opens in London", 
            description: "Giovanni Russo opens the first trattoria, bringing authentic Italian flavors to London.", 
            image: "/images/Passions.jpg" 
            },
            { year: 1990, 
            title: "First Expansion", 
            description: "The second branch opens, gaining popularity among locals and travelers.", 
            image: "/images/Passions.jpg" 
            },
            { year: 1995, 
            title: "Signature Pasta Introduced", 
            description: "Handmade pasta becomes the restaurant's hallmark dish.", 
            image: "/images/Passions.jpg" 
            },
            { year: 2000, 
            title: "International Recognition", 
            description: "Notte Azzura is featured in international food magazines.", 
            image: "/images/Passions.jpg" 
            },
            { year: 2010, 
            title: "Sustainable Sourcing", 
            description: "Alessandro Moretti introduces sustainable ingredients and eco-friendly practices.", 
            image: "/images/Passions.jpg"
            },
            { year: 2020, 
            title: "Modern Italian Dining", 
            description: "The restaurant blends tradition with modern culinary innovation.", 
            image: "/images/Passions.jpg"
            },
            { year: 2025, 
            title: "40 Years Celebration", 
            description: "Celebrating 40 years of authentic Italian cuisine, culture, and community.", 
            image: "/images/Passions.jpg"
            },
        ].map((moment, index) => (
        <div key={index} className="flex-shrink-0 w-80 md:w-96 snap-start bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative w-full h-64 md:h-72">
                <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover"
                />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <p className="text-lg font-semibold">{moment.year}</p>
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold">{moment.title}</h3>
            </div>
            </div>
            <div className="p-4 text-[var(--gray-dark)] text-base">
                {moment.description}
            </div>
        </div>
        ))}
        </div>
    </section>

    {/* Divider */}
    <section className="relative w-full h-[5vh] mx-auto mt-20 bg-[var(--red-dark)] flex items-center justify-center"></section>
    </main>
  );
}