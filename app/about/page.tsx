import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[var(--cream)] text-[var(--red-dark)] min-h-70 font-playfair">

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--black)]/40"/>
        <h1 className="relative text-4xl md:text-5xl font-bold tracking-widest text-center animate-fadeIn">
          ABOUT US
        </h1>
      </section>

      {/* Our History Card */}
      <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-3xl overflow-hidden mx-auto my-12 w-110 md:w-full max-w-screen-lg h-auto">
        {/* Image */}
        <div className="h-60 md:h-auto w-full md:w-1/2">
          <img
            src="/images/OurHistory.jpg"
            alt="Our History"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
            Our History
          </h2>

          <div className="space-y-3 text-sm md:text-md leading-relaxed text-[var(--gray-dark)] max-w-md text-justify animate-fadeIn">
            <p>
              Welcome to <strong>Notte Azzura</strong>, an Italian dining haven in the heart of London,
              born from a family's passion for authentic Italian flavors.
            </p>
            <p>
              Since our early days, we’ve been serving hand-tossed pizzas, pastas, and classic dishes
              crafted from generations of tradition and the finest ingredients.
            </p>
            <p>
              Today, Notte Azzura is more than a restaurant — it’s a place where friends gather,
              stories are shared, and every meal feels like coming home.
            </p>
          </div>

          <Link
            href="/about/OurHistory"
            className="mt-6 px-6 py-2 bg-[var(--red-dark)] text-[var(--white)] text-base font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300"
          >
            Find Out More
          </Link>
        </div>
      </section>

      {/* Culinary Philosophy Card */}
      <section className="group flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-3xl overflow-hidden mx-auto my-12 max-w-110 md:max-w-270 h-auto md:h-[360px] relative transition-all duration-500">

        {/* Text */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 text-center overflow-hidden">

          <div className="transition-opacity duration-500 group-hover:opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
              Our Culinary Philosophy
            </h2>
          </div>

          {/* Text 01 */}
          <div className="space-y-3 md:text-lg leading-relaxed text-[var(--gray-dark)] max-w-md text-justify transition-opacity duration-500 group-hover:opacity-0">
            <p className="text-sm text-[var(--green)] italic uppercase tracking-widest animate-fadeIn">
              — A Chronicle of Taste, Time, and Tradition —
            </p>
            <p className="animate-fadeIn text-sm">
              At <span className="italic font-semibold">Notte Azzura</span>, every dish begins with a story —
              a story of tradition, patience, and artistry inspired by the heart of Italy.
            </p>
          </div>

          {/* Text 02 Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              The story of <span className="italic font-semibold">Notte Azzura</span> began with a promise —
              to keep the essence of Italian dining alive through warmth, artistry, and heritage.
            </p>
            <br />
            <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              Our kitchen follows the traditions of Rome & Naples — slow sauces, rising dough,
              and heartfelt cooking that carries history with every plate.
            </p>
          </div>

        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/Team.jpg"
            alt="Leadership Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Sustainability Plans Card */}
      <section className="group flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-3xl overflow-hidden mx-auto my-12 max-w-110 md:max-w-270 h-auto md:h-[360px] relative transition-all duration-500">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/Sustainability.jpg"
            alt="Sustainability Efforts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 text-center overflow-hidden">

          <div className="transition-opacity duration-500 group-hover:opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
              Our Sustainability Plans
            </h2>
          </div>

          {/* Text 01 */}
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-[var(--gray-dark)] max-w-md text-justify transition-opacity duration-500 group-hover:opacity-0">
            <p className="text-sm text-[var(--green)] italic uppercase tracking-widest animate-fadeIn">
              — Preserving Nature, One Plate at a Time —
            </p>
            <p className="animate-fadeIn text-sm">
              At <span className="italic font-semibold">Notte Azzura</span>, sustainability guides every step —
              from sourcing to reducing waste — as our promise to protect the Earth.
            </p>
          </div>

          {/* Text 02 Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              We rely on locally sourced produce and seasonal selections to honor nature and community.
            </p>
            <br />
            <p className="text-sm md:text-lg leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              From composting waste to minimizing plastics, we ensure great food can align with caring for the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Divider Hero */}
      <section className="relative w-full h-[35vh] md:h-[50vh] mx-auto mt-14 flex flex-col items-center justify-center text-center bg-[var(--red-dark)] text-[var(--white)]">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-2 text-base italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>

      {/* Our Team & Company News */}
      <section className="max-w-110 md:max-w-270 mx-auto my-14 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Team */}
        <div className="bg-[var(--white)] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-8">
          <img
            src="/images/Team02.jpg"
            alt="Our Team"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--red-dark)] mb-3 animate-fadeIn">
              Notte Azzura's Team
            </h3>
            <p className="text-[var(--gray-dark)] md:text-20 leading-relaxed animate-fadeIn">
              Meet the talented individuals bringing passion and skill to our kitchen and service.
            </p>
          </div>
          <Link
            href="/about/OurTeam"
            className="px-6 py-2 bg-[var(--red-dark)] text-[var(--white)] text-base rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300"
          >
            Find Out More
          </Link>
        </div>

        {/* Company News */}
        <div className="bg-[var(--white)] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-8">
          <img
            src="/images/CompanyNews.jpg"
            alt="Company News"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--red-dark)] mb-3 animate-fadeIn">
              Our Company News
            </h3>
            <p className="text-[var(--gray-dark)] md:text-20 leading-relaxed animate-fadeIn">
              Stay updated with milestones, achievements, and announcements from Notte Azzura.
            </p>
          </div>
          <Link
            href="/about/OurNews"
            className="px-6 py-2 bg-[var(--red-dark)] text-[var(--white)] text-base rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300"
          >
            Find Out More
          </Link>
        </div>

      </section>

      {/* Our Passions , Our Mission &  Our Vision */}
      <section className="max-w-110 md:max-w-270 h-370 md:h-130 mx-auto my-14 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Our Passions */}
        <div className="group bg-[var(--white)] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-8 relative">
          <img
            src="/images/Passions.jpg"
            alt="Passions"
            className="w-full h-72 object-cover group-hover:opacity-0 transition-all duration-500"
          />
          <div className="p-6 group-hover:opacity-0 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--red-dark)] mb-3 animate-fadeIn">
              Our Passions
            </h3>
            <p className="text-[var(--gray-dark)] text-sm md:text-15 leading-relaxed mb-5 animate-fadeIn">
              Great food, great music, great company. Our passion is to bring this spirit to every experience, 
              creating a place where warmth, connection, and authentic Italian joy come naturally.            
            </p>
          </div>

          {/* Text Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg md:text-4sm leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              Our passion is to bring the true Italian spirit to every moment — where great food, warm music, 
              and genuine company come together effortlessly. We aim to create experiences that feel inviting 
              and heartfelt, allowing guests to enjoy the simple pleasures of togetherness, authenticity, and 
              the joy found at every Italian table.    
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="group bg-[var(--white)] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-8 relative">
          <img
            src="/images/InternationalRestaurants.jpg"
            alt="International Restaurants"
            className="w-full h-72 object-cover group-hover:opacity-0 transition-all duration-500"
          />
          <div className="p-6 group-hover:opacity-0 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--red-dark)] mb-3 animate-fadeIn">
              Our Vision
            </h3>
            <p className="text-[var(--gray-dark)] text-sm md:text-15 leading-relaxed mb-5 animate-fadeIn">
              Our mission is to craft authentic Italian experiences through exceptional flavors, heartfelt 
              hospitality, and a warm atmosphere that brings people together.
            </p>
          </div>

          {/* Text Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg md:text-4sm leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              We envision Notte Azzura as a space where every guest feels transported into the heart of Italy — 
              a place where culinary artistry, hospitality, and atmosphere come together in perfect harmony. 
              Our vision is to create moments that linger in memory, where guests feel connected not only to the 
              food on their table, but to the story, culture, and passion behind every recipe we share.   
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="group bg-[var(--white)] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-8 relative">
          <img
            src="/images/Partnerships.jpg"
            alt="Partnerships"
            className="w-full h-72 object-cover group-hover:opacity-0 transition-all duration-500"
          />
          <div className="p-6 group-hover:opacity-0 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--red-dark)] mb-3 animate-fadeIn">
              Our Mission
            </h3>
            <p className="text-[var(--gray-dark)] text-sm md:text-20 leading-relaxed mb-5 animate-fadeIn">
              Our mission is to bring authentic Italian culinary artistry to every guest through refined flavors, 
              warm hospitality, and unforgettable dining experiences.            
            </p>
          </div>

          {/* Text Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg md:text-4sm leading-relaxed text-[var(--gray-dark)] max-w-md text-justify">
              We rely on locally sourced produce and seasonal selections to honor nature and support our 
              surrounding community. By choosing ingredients that are harvested at their peak, we not only 
              celebrate freshness and flavor, but also strengthen our connection with local farmers and producers. 
              Each dish becomes a reflection of the region’s best offerings, crafted with intention and care to 
              give guests an experience that feels both genuine and thoughtful.            
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="relative w-full h-[50vh] mx-auto mt-16 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--cream)]/80 to-[var(--red-dark)]/90 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] tracking-widest animate-fadeIn">
          NOTTE AZZURA
        </h2>
        <p className="mt-2 text-base italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
          — mangiare bene è vivere bene —
        </p>
      </section>

    </main>
  );
}