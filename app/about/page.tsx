import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
        {/* HERO */}
        <section className="relative h-[50vh] flex items-center justify-center bg-[var(--red-dark)] text-[var(--white)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--red-dark)]/60 to-[var(--black)]/40" />
        <h1 className="relative text-6xl font-bold tracking-widest text-center animate-fadeIn font-[var(--font-playfair)]">
          ABOUT US
        </h1>
        </section>

        {/* Our History Card */}
        <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
        <img
            src="/images/OurHistory.jpg"
            alt="Our History"
            className="w-full h-full object-cover"
        />
        </div>
        {/* Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
        <h2 className="text-5xl md:text-6xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6">
            Our History
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
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
            className="mt-10 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300"
            >
            Find Out More
        </Link>
        </div>
        </section>

        {/* Our Leadership Team Card */}
        <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[450px]">
        {/* Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6">
            Our Leadership Team
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
        <p>
            For more information on our management click below. If you’re an investor with questions about
            <strong> Notte Azzura</strong>, please email <a href="mailto:investor@notteazzura.com" className="text-[var(--red)] hover:underline">investor@notteazzura.com</a>.
        </p>
        <p>
            If you're a journalist with questions about <strong>Notte Azzura</strong>, please email 
            <a href="mailto:press@notteazzura.com" className="text-[var(--red)] hover:underline"> press@notteazzura.com</a>.
        </p>
        </div>
        
        {/* Tombol */}
        <button className="mt-10 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300">
            Find Out More
        </button>
        </div>

        {/* Gambar */}
        <div className="w-full md:w-1/2">
        <img
            src="/images/Team.jpg"
            alt="Leadership Team"
            className="w-full h-full object-cover"
        />
        </div>
        </section>

        {/* Our Sustainability Plans Card */}
        <section className="flex flex-col md:flex-row bg-[var(--white)] shadow-lg rounded-4xl overflow-hidden mx-auto my-16 max-w-screen-2xl h-auto md:h-[450px]">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
            <img
            src="/images/Sustainability.jpg"
            alt="Sustainability Efforts"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-6">
            Our Sustainability Plans
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-[var(--gray-dark)] max-w-lg text-justify">
        <p>
            As one of the UK’s most beloved brands, we recognise our responsibility to the environment and
            society. Find out more about what we do for our <strong>Planet</strong>, <strong>Pizza</strong>,
            and <strong>People</strong> here.
        </p>
        </div>

        {/* Tombol */}
        <button className="mt-10 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300">
            Find Out More
        </button>
        </div>
        </section>

        {/* Divider Hero */}
        <section className="relative w-full h-[60vh] mx-auto mt-20 bg-[var(--red-dark)] flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-white text-center">
            NOTTE AZZZURA
        </h2>
        </section>

        {/* Our Team & Company News Cards */}
        <section className="max-w-screen-2xl mx-auto my-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 - Our Team */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-12">
        {/* Gambar */}
        <img
            src="/images/Team02.jpg"
            alt="Our Team"
            className="w-full h-150 object-cover"
        />
        <div className="p-8">

        {/* Teks */}
        <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4">
            Notte Azzura's Team
        </h3>
        <p className="text-[var(--gray-dark)] text-lg leading-relaxed">
            Meet the talented individuals behind Notte Azzura, each bringing their unique skills and
            passion for Italian cuisine to the table.
        </p>
        </div>

        {/* Tombol */}
        <Link
            href="/about/OurTeam"
            className="mt-6 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300"
            >
            Find Out More
        </Link>
        </div>

        {/* Card 2 - Our Company News */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-12">
        {/* Gambar */}
        <img
            src="/images/CompanyNews.jpg" 
            alt="Company News"
            className="w-full h-150 object-cover"
        />
        <div className="p-8">
        
        {/* Teks */}
        <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4">
            Our Company News
        </h3>
        <p className="text-[var(--gray-dark)] text-lg leading-relaxed">
            Stay updated with the latest stories, milestones, and announcements from Notte Azzura
            as we continue to grow and innovate.
        </p>
        </div>

        {/* Tombol */}
        <button className="mt-6 px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300">
            Find Out More
        </button>
        </div>
        </section>

        {/* Our Passions, International Restaurants & Partnerships Cards */}
        <section className="max-w-screen-2xl mx-auto my-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 - Our Passions */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-10">
        {/* Gambar */}
        <img
            src="/images/Passions.jpg"
            alt="Passions"
            className="w-full h-150 object-cover transition-transform duration-500"
        />
        <div className="p-8">
        {/* Teks */}
        <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4">
            Our Passions
        </h3>
        <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6">
            Bringing a dining table to life with great food, great music and great company.
            Lifting glasses and spirits. Getting smiles on faces and sauce on t-shirts.
            That's what we're all about.
        </p>
        
        {/* Tombol */}
        <button className="px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300">
            Find Out More
        </button>
        </div>
        </div>

        {/* Card 2 - Our International Restaurants */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-10">
        {/* Gambar */}
        <img
            src="/images/InternationalRestaurants.jpg"
            alt="International Restaurants"
            className="w-full h-150 object-cover transition-transform duration-500"
        />
        <div className="p-8">
        
        {/* Teks */}
        <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4">
            Our International Restaurants
        </h3>
        <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6">
            All those PizzaExpress favourites you know and love have crossed countries and continents
            to be wherever you are.
        </p>

        {/* Tombol */}
        <button className="px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300">
            Find Out More
        </button>
        </div>
        </div>

        {/* Card 3 - Our Partnerships */}
        <div className="bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition duration-300 pb-10">
        {/* Gambar */}
        <img
            src="/images/Partnerships.jpg"
            alt="Partnerships"
            className="w-full h-150 object-cover transition-transform duration-500"
        />
        <div className="p-8">
        <h3 className="text-3xl font-[var(--font-playfair)] font-semibold text-[var(--red-dark)] mb-4">
            Our Partnerships
        </h3>
        <p className="text-[var(--gray-dark)] text-lg leading-relaxed mb-6">
            Fill your stomach without emptying your pockets with our money-saving partnership offers.
        </p>

        {/* Tombol */}
        <button className="px-8 py-3 bg-[var(--red-dark)] text-[var(--white)] text-lg font-medium rounded-full shadow-md hover:bg-[var(--red-light)] transition duration-300">
            Find Out More
        </button>
        </div>
        </div>
        </section>
    </main>
  );
}