"use client";
import { useRef, useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Staff {
  id: number;
  name: string;
  role: string;
  category: "kitchen" | "service" | "cleaning";
  image: string;
}

export default function OurTeamPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const teamSectionRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 8;
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const staffData: Staff[] = [
    { id: 1, 
      name: "Maria Rossi", 
      role: "Head Chef", 
      category: "kitchen", 
      image: "/images/Team02.jpg" 
    },
    { id: 2, 
      name: "David Lee", 
      role: "Restaurant Manager", 
      category: "service", 
      image: "/images/Team02.jpg" 
    },
    { id: 3, 
      name: "Sofia Bianchi", 
      role: "Sous Chef", 
      category: "kitchen", 
      image: "/images/Team02.jpg" 
    },
    { id: 4, 
      name: "Marco Santini", 
      role: "Sommelier", 
      category: "service", 
      image: "/images/Team02.jpg" 
    },
    { id: 5, 
      name: "Terresia Ansc", 
      role: "Head Cleaner", 
      category: "cleaning", 
      image: "/images/Team02.jpg" 
    },
    { id: 6, 
      name: "Luca Moretti", 
      role: "Line Cook",
      category: "kitchen",
      image: "/images/Team02.jpg"
    },
    { id: 7, 
      name: "Giulia Romano",
      role: "Waitress",
      category: "service",
      image: "/images/Team02.jpg"
    },
    { id: 8,
      name: "Elena Greco",
      role: "Cleaning Staff",
      category: "cleaning",
      image: "/images/Team02.jpg"
    },
    { id: 9,
      name: "Antonio De Luca",
      role: "Pastry Chef",
      category: "kitchen",
      image: "/images/Team02.jpg"
    },
    { id: 10,
      name: "Francesca Conti",
      role: "Hostess",
      category: "service",
      image: "/images/Team02.jpg"
    },
    { id: 11,
      name: "Paolo Vitale",
      role: "Cleaning Staff",
      category: "cleaning",
      image: "/images/Team02.jpg"
    },
    { id: 12,
      name: "Chiara Fontana",
      role: "Kitchen Assistant",
      category: "kitchen",
      image: "/images/Team02.jpg"
    },
    { id: 13,
      name: "Matteo Rinaldi",
      role: "Bartender",
      category: "service",
      image: "/images/Team02.jpg"
    },
    { id: 14,
      name: "Valentina Galli",
      role: "Cleaning Staff",
      category: "cleaning",
      image: "/images/Team02.jpg"
    },
    { id: 15,
      name: "Federico Russo",
      role: "Chef de Partie",
      category: "kitchen",
      image: "/images/Team02.jpg"
    },
    { id: 16,
      name: "Alessia Marino",
      role: "Waitress",
      category: "service",
      image: "/images/Team02.jpg"
    },
    { id: 17,
      name: "Giovanni Esposito",
      role: "Cleaning Staff",
      category: "cleaning",
      image: "/images/Team02.jpg"
    },
    { id: 18,
      name: "Elisa Ferrara",
      role: "Pastry Assistant",
      category: "kitchen",
      image: "/images/Team02.jpg"
    },
    { id: 19,
      name: "Nicola Vitelli",
      role: "Waiter",
      category: "service",
      image: "/images/Team02.jpg"
    },
    { id: 20,
      name: "Sara Lombardi",
      role: "Cleaning Staff",
      category: "cleaning",
      image: "/images/Team02.jpg"
    },
  ];

  const filteredStaff = useMemo(() => {
    return staffData.filter((staff) => {
      const matchesName = staff.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filter === "all" || staff.category === filter;
      return matchesName && matchesCategory;
    });
  }, [search, filter]);

  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);

  useEffect(() => {
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <main className="min-h-500 bg-[var(--cream)] text-[var(--black)] font-playfair">
      
      <Navbar />
      
      {/* Hero */}
      <div className="pt-31 md:pt-31">
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--red-dark)]/70 to-[var(--black)]/50"/>
            <h1 className="relative text-4xl md:text-5xl font-bold tracking-widest text-center font-playfair animate-fadeIn">
                Our Team, Our Heart
            </h1>
      </section>
      </div>

      {/* Divider */}
      <section className="relative w-full h-[5vh] mx-auto bg-[var(--red-dark)] flex items-center justify-center bg-gradient-to-b from-[var(--red-dark)]/70 to-[var(--black)]/50"></section>

      {/* Title Section - The Soul of Notte Azzura */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center text-[var(--white)] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Kitchen.jpg')",
          }}
        ></div>
        {/* Dim Image */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text */}
        <div className="relative z-10 max-w-10xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-3 items-center">
          {/* Text (Left) */}
          <div>
            <h2 className="mt-15 text-3xl md:text-4xl tracking-widest text-[var(--cream)] pb-2 animate-fadeIn">
              The Soul of Notte Azzura
            </h2>
            <div className="border-b border-[var(--cream)] mt-3"></div>
            <p className="mt-6 md:mb-15 text-sm md:text-md text-[var(--cream)] leading-relaxed animate-fadeIn">
              A passionate team united by a love for authentic Italian cuisine. From our talented chefs who craft
              timeless recipes with the finest ingredients to our dedicated staff who make every guest feel truly
              welcome — each member of Team Notte Azzura plays a vital role in creating an unforgettable dining
              experience. Our kitchen is where tradition meets creativity, where every dish tells a story of Italy’s
              rich culinary heritage.
              <br /><br />
              Together, we create more than just meals — we create moments filled with warmth, flavor, and joy.
              At Notte Azzura, dining is about connection: laughter over a glass of wine, the comfort of familiar
              flavors, and the excitement of something new.
            </p>
          </div>

          {/* GIF (Right) */}
          <div className="flex justify-end animate-fadeIn">
            <div className="rounded-4xl overflow-hidden shadow-lg">
              <img
                src="/images/Pizza.gif"
                alt="Our Team GIF"
                className="mb-5 w-130 h-60 md:h-100 object-cover opacity-15 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="relative w-full h-[15vh] mx-auto bg-[var(--red-dark)] flex items-center justify-center bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--cream)]"></section>

      {/* Our Team Today */}
      <section ref={teamSectionRef} className="max-w-screen-2xl mx-auto mt-16 px-6 md:px-16">
        <h2 className="text-4xl font-playfair font-semibold text-[var(--red-dark)] text-center animate-fadeIn">
          Our Team Today
        </h2>
        <p className="mt-2 text-center text-sm md:text-md italic text-[var(--gray-dark)] tracking-widest animate-fadeIn">
          — fresh from our kitchen to your table —
        </p>
        <p className="mt-2 text-center text-sm md:text-md text-[var(--gray-dark)] animate-fadeIn">
          Meet the passionate individuals who make Notte Azzura a special place
        </p>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search our staff by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-70 md:w-1/4 px-4 py-2 rounded-full border border-[var(--green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--green-light)]"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-40 md:w-1/4 px-4 py-2 rounded-full border border-[var(--green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--green-light)]"
          >
            <option value="all">All Staff</option>
            <option value="kitchen">Kitchen Staff</option>
            <option value="service">Service Staff</option>
            <option value="cleaning">Cleaning Staff</option>
          </select>
        </div>

        {/* Staff */}
        <section className="mt-12">
          {/* Staff (Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4  gap-10 animate-fadeIn">
            {filteredStaff
              .slice((currentPage - 1) * 8, currentPage * 8)
              .map((staff) => (
                <div
                  key={staff.id}
                  className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-xl transition duration-300"
                >
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full object-cover rounded-2xl mb-6"
                  />
                  <h3 className="text-2xl font-playfair font-semibold text-[var(--green-dark)] mb-2">
                    {staff.name}
                  </h3>
                  <p className="text-[var(--gray-dark)] text-lg">{staff.role}</p>
                </div>
              ))}
          </div>

          {/* Page Staff Button */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`text-[var(--green-dark)] px-5 py-2 rounded-full border border-[var(--green-dark)] font-semibold transition ${
                currentPage === 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-[var(--green-dark)] hover:text-[var(--white)]'
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
              className={`text-[var(--green-dark)] px-5 py-2 rounded-full border border-[var(--green-dark)] font-semibold transition ${
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[var(--green-dark)] hover:text-[var(--cream)]'
              }`}
            >
              Next →
            </button>
          </div>
        </section>
      </section>

      {/* Divider */}
      <section className="relative w-full h-[15vh] mt-15 mx-auto bg-[var(--red-dark)] flex items-center justify-center bg-gradient-to-b from-[var(--cream)] to-[var(--red-dark)]/60"></section>

      {/* Thank You Card */}
      <section className="relative h-[80vh] flex items-center justify-center text-[var(--white)] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center grayscale-50"
          style={{
            backgroundImage: "url('/images/Passions.jpg')",
          }}
        ></div>
        {/* Dim Image */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text */}
        <div className="relative z-10 max-w-110 md:max-w-250 mx-auto">
          <div className="bg-[var(--green-dark)]/90 text-[var(--white)] shadow-4xl p-12 text-center rounded-3xl opacity-80">
            <h2 className="text-xl md:text-4xl font-playfair font-semibold mb-6 tracking-widest animate-fadeIn">
              — Thank You to Our Team —
            </h2>
            <p className="text-sm md:text-md leading-relaxed animate-fadeIn">
              We sincerely thank our incredible team for their dedication, passion, and hard work. Your commitment and teamwork have been essential in bringing the spirit of Notte Azzura to life. Each of you brings something special — from creativity in the kitchen to warmth in our service — and together, you make Notte Azzura more than just a restaurant. We are truly grateful for everything you do every day.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="relative w-full h-[15vh] mx-auto bg-[var(--red-dark)] flex items-center justify-center bg-gradient-to-b from-[var(--red-dark)]/70 to-[var(--cream)]/100"></section>

      {/* Join Our Team Section */}
      <section className="bg-[var(--cream)] py-24 px-6 flex flex-col items-center justify-center text-center text-[var(--red-dark)]">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-2 animate-fadeIn">
            Want to Join the Notte Azzura Family?
          </h2>
          <p className="text-center text-sm md:text-md text-[var(--green-dark)] tracking-widest italic animate-fadeIn">
            — We welcome all who share our passion for hospitality and authentic Italian cuisine! —
          </p>
          <p className="text-base md:text-xl text-[var(--gray-dark)] leading-relaxed mb-10 mt-6 animate-fadeIn">
            We’re always looking for passionate individuals who share our love for authentic Italian cuisine.
            Become a part of a team where every day is filled with flavor, creativity, and warmth.
          </p>
          <a
            href="/contactloc"
            className="inline-flex items-center gap-3 bg-[var(--green-dark)] hover:bg-[var(--green)] text-[var(--white)] text-base md:text-xl font-medium px-8 py-4 rounded-full shadow-lg transition duration-300 animate-fadeIn"
          >
            Contact Us Here!
          </a>
        </div>
      </section>

      <Footer />

    </main>
  );
}