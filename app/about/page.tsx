import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[var(--cream)] text-[var(--red-dark)] min-h-screen font-[var(--font-playfair)]">
        {/* HERO */}
        <section className="relative h-[50vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--black)]/40" />
                <h1 className="relative text-6xl font-bold tracking-widest text-center animate-fadeIn font-[var(--font-playfair)]">
                    ABOUT US
                </h1>
        </section>

        {/* Our History Card */}
        <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[700px]">
            {/* Image */}
            <div className="w-full md:w-1/2">
                <img
                    src="/images/OurHistory.jpg"
                    alt="Our History"
                    className="w-full h-full object-cover"
                />
            </div>
        
            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
                <h2 className="text-5xl md:text-6xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6 animate-fadeIn">
                    Our History
                </h2>

                <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify animate-fadeIn">
                    <p>
                        Welcome to <strong>Notte Azzura</strong>, an Italian dining haven in the heart of London.
                        Born from a family’s passion for authentic Italian flavors, our story began with a simple
                        dream — to bring the warmth and taste of Italy to the city.
                    </p>
                    <p>
                        Since our early days, we’ve been serving hand-tossed pizzas, fresh pastas, and classic dishes
                        crafted from generations of tradition and the finest ingredients. Each plate is a tribute to
                        the art of Italian cooking and a celebration of togetherness.
                    </p>
                    <p>
                        Today, Notte Azzura stands as more than just a restaurant — it’s a place where friends gather,
                        stories are shared, and every meal feels like coming home. Join us for a taste of
                        <em> la dolce vita</em> — the sweet life, the Italian way.
                    </p>
                </div>

                {/* Tombol */}
                <Link
                    href="/about/OurHistory"
                    className="mt-10 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300 animate-fadeIn"
                    >
                    Find Out More
                </Link>
            </div>
        </section>

        {/* Culinary Philosophy Card */}
        <section className="group flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[450px] transition-all duration-500 relative">
            {/* Text */}
            <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center overflow-hidden">
                <div className="transition-opacity duration-500 group-hover:opacity-0">
                    <h2 className=" text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6 animate-fadeIn">
                        Our Culinary Philosophy
                    </h2>
            </div>

            {/* Text 01 */}
            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify transition-opacity duration-500 group-hover:opacity-0">
                <p className="text-base text-[var(--green)] italic uppercase tracking-widest animate-fadeIn">
                    — A Chronicle of Taste, Time, and Tradition —
                </p>
                <p className="animate-fadeIn">
                    At <span className="italic font-semibold">Notte Azzura</span>, every dish begins with a story — 
                    a story of tradition, patience, and artistry. Our chefs draw inspiration from the heart of Italy, 
                    where the essence of dining is not only in flavor, but in the love and care poured into every step.
                </p>
            </div>

            {/* Text 02 (Hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-8 md:px-16 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                    The story of <span className="italic font-semibold">Notte Azzura</span> began with a promise — 
                    to keep the essence of Italian dining alive in a modern world. Our chefs, 
                    artisans of both flavor and feeling, are devoted to recreating the warmth of 
                    a true Italian table, where every dish is a conversation and every aroma tells 
                    a story of heritage and heart.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                    We carry forward the legacy of generations who believed that good food is 
                    never rushed. The rhythm of our kitchen follows the same melody as 
                    the trattorias of Rome and Naples — where sauces bubble slowly, dough rises 
                    under patient hands, and laughter fills the air. It is a legacy of care, 
                    of knowing that each plate we serve carries a piece of history.
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
        <section className="group flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[450px] transition-all duration-500 relative">
            {/* Image */}
            <div className="w-full md:w-1/2">
                <img
                    src="/images/Sustainability.jpg"
                    alt="Sustainability Efforts"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center overflow-hidden">
                <div className="transition-opacity duration-500 group-hover:opacity-0">
                    <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6 animate-fadeIn">
                        Our Sustainability Plans
                    </h2>
            </div>

            {/* Text 01 */}
            <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify transition-opacity duration-500 group-hover:opacity-0">
                <p className="text-base text-[var(--green)] italic uppercase tracking-widest animate-fadeIn">
                    — Preserving Nature, One Plate at a Time —
                </p>
                <p className="animate-fadeIn">
                    At <span className="italic font-semibold">Notte Azzura</span>, sustainability is at the heart of our kitchen. 
                    From responsible sourcing to reducing food waste, every choice we make reflects 
                    our promise to protect the Earth while serving authentic Italian cuisine.
                </p>
            </div>

            {/* Text 02 */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-8 md:px-16 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                    Our sustainability journey begins with ingredients — locally sourced produce, 
                    seasonal selections, and partnerships with eco-conscious suppliers. 
                    Each ingredient tells a story of respect for nature and the community around us.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
                    From composting organic waste to minimizing plastic usage, 
                    our mission goes beyond the kitchen. We believe that fine dining can coexist 
                    with environmental care — creating flavors that are not only delicious, 
                    but also kind to the planet we call home.
                </p>
            </div>
            </div>
        </section>

        {/* Divider Hero */}
        <section className="relative w-full h-[40vh] mx-auto mt-20 flex flex-col items-center justify-center text-center bg-[var(--red-dark)] text-[var(--white)]">
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[var(--white)] tracking-widest animate-fadeIn">
                NOTTE AZZURA
            </h2>
            <p className="mt-3 text-lg italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
                — mangiare bene è vivere bene —
            </p>
        </section>

        {/* Our Team & Company News Cards */}
        <section className="max-w-screen-2xl mx-auto my-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 - Our Team */}
            <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-12">
                {/* Image */}
                <img
                    src="/images/Team02.jpg"
                    alt="Our Team"
                    className="w-full h-150 object-cover"
                />
                <div className="p-8">

                    {/* Text */}
                    <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
                        Notte Azzura's Team
                    </h3>
                    <p className="text-[var(--gray-dark)] text-lg leading-relaxed animate-fadeIn">
                        Meet the talented individuals behind Notte Azzura, each bringing their unique skills and
                        passion for Italian cuisine to the table.
                    </p>
                </div>

                {/* Tombol */}
                <Link
                    href="/about/OurTeam"
                    className="mt-6 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300 animate-fadeIn"
                    >
                    Find Out More
                </Link>
            </div>

            {/* Card 2 - Our Company News */}
            <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-12">
                {/* Image */}
                <img
                    src="/images/CompanyNews.jpg" 
                    alt="Company News"
                    className="w-full h-150 object-cover"
                />
                <div className="p-8">
            
                    {/* Text */}
                    <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
                        Our Company News
                    </h3>
                    <p className="text-[var(--gray-dark)] text-lg leading-relaxed animate-fadeIn">
                        Stay updated with the latest stories, milestones, and announcements from Notte Azzura
                        as we continue to grow and innovate.
                    </p>
                </div>

                {/* Tombol */}
                <button className="mt-6 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300 animate-fadeIn">
                    Find Out More
                </button>
            </div>
        </section>

        {/* Our Passions, International Restaurants & Partnerships Cards */}
        <section className="max-w-screen-2xl mx-auto my-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 - Our Passions */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-10">
            {/* Image */}
            <img
                src="/images/Passions.jpg"
                alt="Passions"
                className="w-full h-150 object-cover transition-transform duration-500"
            />
            <div className="p-8">
                {/* Text */}
                <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
                    Our Passions
                </h3>
                <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6 animate-fadeIn">
                    Bringing a dining table to life with great food, great music and great company.
                    Lifting glasses and spirits. Getting smiles on faces and sauce on t-shirts.
                    That's what we're all about.
                </p>
        
                {/* Tombol */}
                <button className="px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300 animate-fadeIn">
                    Find Out More
                </button>
            </div>
        </div>

        {/* Card 2 - Our International Restaurants */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-10">
            {/* Image */}
            <img
                src="/images/InternationalRestaurants.jpg"
                alt="International Restaurants"
                className="w-full h-150 object-cover transition-transform duration-500"
            />
            <div className="p-8">
                
                {/* Text */}
                <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
                    Our International Restaurants
                </h3>
                <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6 animate-fadeIn">
                    All those PizzaExpress favourites you know and love have crossed countries and continents
                    to be wherever you are.
                </p>

                {/* Tombol */}
                <button className="px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300 animate-fadeIn">
                    Find Out More
                </button>
            </div>
        </div>

        {/* Card 3 - Our Partnerships */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-10">
            {/* Image */}
            <img
                src="/images/Partnerships.jpg"
                alt="Partnerships"
                className="w-full h-150 object-cover transition-transform duration-500"
            />
            <div className="p-8">

                {/* Text */}
                <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4 animate-fadeIn">
                    Our Partnerships
                </h3>
                <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6 animate-fadeIn">
                    Fill your stomach without emptying your pockets with our money-saving partnership offers.
                </p>

                {/* Tombol */}
                <button className="px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300 animate-fadeIn">
                    Find Out More
                </button>
            </div>
        </div>
        </section>

        {/* Divider Hero */}
        <section className="relative w-full h-[40vh] mx-auto mt-20 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--cream)]/80 to-[var(--red-dark)]/90 text-center">
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[var(--white)] tracking-widest animate-fadeIn">
                NOTTE AZZURA
            </h2>
            <p className="mt-3 text-lg italic text-[var(--cream)] tracking-widest animate-fadeIn delay-200">
                — mangiare bene è vivere bene —
            </p>
        </section>
    </main>
  );
}