"use client";

import { useParams } from "next/navigation";

export default function FounderPage() {
    const { id } = useParams();

    // Founder 1: Giovanni Russo
    if (id === "1") {
        return (
            <main className="min-h-screen bg-[var(--cream)] text-[var(--red-dark)] font-[var(--font-playfair)] px-6 md:px-16 py-12">
            
            {/* Header */}
            <header className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-wide mb-4">
                    Giovanni Russo
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--green-dark)]">
                    Founder & Head Chef
                </h2>
            </header>

            {/* Article Section */}
            <section className="max-w-screen-2xl mx-auto bg-[var(--white)] shadow-lg rounded-4xl p-8 md:p-16 flex flex-col md:flex-row gap-12"> 
        
            {/* Bio */}
            <div className="w-full md:w-3/5 text-justify text-lg md:text-xl leading-relaxed column-count-2 column-gap-10 space-y-6">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[var(--red-dark)]">
                    Born in a small town near Naples, Giovanni Russo grew up surrounded by the aroma of wood-fired pizzas, freshly baked bread, and the laughter of family gatherings. From an early age, he showed a keen interest in cooking, often helping his grandmother in the kitchen and learning the secrets of traditional Italian recipes passed down through generations.
                </p>
                <p>
                    Determined to share the rich flavors and traditions of his homeland, Giovanni pursued formal culinary training in Naples before venturing abroad. In 1985, he opened the first Notte Azzura in London, a cozy trattoria that quickly gained attention for its authenticity and warmth.
                </p>
                <p>
                    Over the years, Giovanni has expanded his restaurants and mentored young chefs, inspiring them to honor culinary traditions while embracing creativity. His philosophy revolves around authenticity, passion, and the joy of sharing meals with friends and family.
                </p>
                <p>
                    Today, Giovanni continues to travel, teach, and collaborate with culinary communities worldwide. He remains a symbol of Italian gastronomy abroad, proving that food is more than sustenance—it is a bridge between cultures, a celebration of heritage, and a source of happiness and connection.
                </p>
            </div>

            {/* Image + Quote */}
            <div className="w-full md:w-2/5 flex flex-col items-center md:items-end">
                <img
                    src="/images/Founder01.jpg"
                    alt="Giovanni Russo"
                    className="w-full max-w-md h-auto rounded-3xl shadow-lg mb-6"
                />
                <blockquote className="text-xl md:text-2xl italic text-[var(--red-dark)] text-right max-w-md border-l-4 border-[var(--red-dark)] pl-4">
                    "Every dish tells a story, and every story deserves to be shared."
                </blockquote>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Achievements + Philosophy */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
                
            {/* Achievements */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
                    <li>Opened the first Notte Azzura in London in 1985, introducing authentic Italian dining to the city.</li>
                    <li>Received multiple culinary awards for traditional Italian cuisine, including “Best Italian Restaurant in London” three times.</li>
                    <li>Mentored over 50 chefs who now run their own successful restaurants across Europe and North America.</li>
                    <li>Featured in international culinary magazines and TV shows, showcasing his expertise in traditional Neapolitan cooking.</li>
                    <li>Developed signature dishes that have become iconic, such as wood-fired pizzas and handcrafted pasta recipes.</li>
                    <li>Collaborated with culinary schools to create programs teaching authentic Italian cooking techniques.</li>
                </ul>
            </div>

            {/* Philosophy & Cooking Style */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--red-dark)] border-b border-[var(--red-dark)] pb-2">
                    Philosophy & Cooking Style
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-justify space-y-4">
                    Giovanni’s cooking philosophy is rooted in authenticity, simplicity, and passion. He believes that every ingredient has a story and that respecting traditional techniques brings out the best flavors. His style balances rustic Italian classics with modern creativity, always prioritizing fresh, seasonal ingredients. Giovanni emphasizes that food should be shared, enjoyed, and remembered — not just consumed.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-justify mt-4">
                    He also integrates sustainable sourcing and teaches young chefs to honor both tradition and innovation. This philosophy has shaped Notte Azzura’s reputation as a place where culinary art and heartfelt hospitality come together seamlessly.
                </p>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Media & Press Mentions */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16">
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Media & Press Mentions
                </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media01.jpg" 
                        alt="Media 1" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Notte Azzura brings authentic Italian flavors with an unforgettable dining experience.” – Food Magazine
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media02.jpg" 
                        alt="Media 2" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “A masterpiece of Italian cuisine in the heart of London.” – Culinary Times
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media03.jpg" 
                        alt="Media 3" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Giovanni Russo’s vision and passion shine in every dish.” – Global Eats
                    </p>
                </div>
            </div>
            </section>
            </main>
        );
    }

    // Founder 2: Sam Fisher
    if (id === "2") {
        return (
            <main className="min-h-screen bg-[var(--cream)] text-[var(--red-dark)] font-serif px-6 md:px-16 py-12">
            
            {/* Header */}
            <header className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-wide mb-4">
                    Sam Fisher
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--green-dark)]">
                    Co-Founder & Culinary Director
                </h2>
            </header>

            {/* Article Section */}
            <section className="max-w-screen-2xl mx-auto bg-[var(--white)] shadow-lg rounded-4xl p-8 md:p-16 flex flex-col md:flex-row gap-12">
            
            {/* Bio */}
            <div className="w-full md:w-3/5 text-justify text-lg md:text-xl leading-relaxed column-count-2 column-gap-10 space-y-6">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[var(--red-dark)]">
                    Sam Fisher was the creative heart behind Notte Azzura’s atmosphere and culinary soul. Raised in Florence, he mastered the art of balancing beauty and simplicity — from the flavors on the plate to the design of every restaurant space.
                </p>
                <p>
                    His partnership with Giovanni Russo brought together passion and precision, combining culinary expertise with design elegance. Sam’s vision transformed Notte Azzura into more than a restaurant — it became an experience where every guest feels like part of the family.
                </p>
                <p>
                    Over the years, Sam has contributed to interior design, menu presentation, and the overall brand identity, ensuring that each location reflects both authenticity and sophistication. He believes that dining is an immersive experience, where aesthetics and flavors create lasting memories.
                </p>
                <p>
                    Today, Sam continues to innovate, collaborating with chefs, designers, and culinary schools worldwide. His work emphasizes harmony, creativity, and the joy of sharing Italian culture with every guest.
                </p>
            </div>

            {/* Image + Quote */}
            <div className="w-full md:w-2/5 flex flex-col items-center md:items-end">
                <img
                    src="/images/Founder02.jpg"
                    alt="Sam Fisher"
                    className="w-full max-w-md h-auto rounded-3xl shadow-lg mb-6"
                />
                <blockquote className="text-xl md:text-2xl italic text-[var(--red-dark)] text-right max-w-md border-l-4 border-[var(--red-dark)] pl-4">
                    "Design and flavor go hand in hand; every detail tells a story."
                </blockquote>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Achievements + Philosophy */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
                
            {/* Achievements */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
                <li>Co-created the unique aesthetic and branding of Notte Azzura, setting new standards in Italian dining design.</li>
                    <li>Designed signature interiors for multiple Notte Azzura locations, blending elegance with warmth.</li>
                    <li>Collaborated with chefs to craft visually stunning presentations for signature dishes.</li>
                    <li>Featured in design and lifestyle magazines for contributions to restaurant concepts and guest experiences.</li>
                    <li>Mentored young designers and hospitality creatives in merging aesthetics with functional dining spaces.</li>
                    <li>Played a key role in elevating Notte Azzura into a globally recognized Italian dining experience.</li>
                </ul>
            </div>

            {/* Philosophy & Style */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--red-dark)] border-b border-[var(--red-dark)] pb-2">
                    Philosophy & Style
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-justify space-y-4">
                    Sam believes that dining is a multi-sensory experience, where flavor, design, and ambiance work together. His style emphasizes simplicity, elegance, and thoughtful details that enhance the enjoyment of Italian cuisine.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-justify mt-4">
                    By integrating sustainable materials, balanced aesthetics, and storytelling through design, Sam ensures that every restaurant reflects the soul of Italian culture while inviting guests to feel at home.
                </p>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Media & Press Mentions */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16">
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Media & Press Mentions
                </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media01.jpg" 
                        alt="Media 1" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Sam Fisher’s design vision elevates dining into an unforgettable experience.” – Design & Dining Magazine
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media02.jpg" 
                        alt="Media 2" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “A master of ambiance and visual storytelling in Italian restaurants.” – Culinary Spaces
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media03.jpg" 
                        alt="Media 3" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “His partnership with Giovanni Russo brought harmony between taste and aesthetics.” – Global Hospitality Review
                    </p>
                </div>
            </div>
            </section>
            </main>
        );
    }

    // Founder 3: Lucia Bianchi
    if (id === "3") {
        return (
            <main className="min-h-screen bg-[var(--cream)] text-[var(--red-dark)] font-serif px-6 md:px-16 py-12">
            
            {/* Header */}
            <header className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-wide mb-4">
                    Lucia Bianchi
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--green-dark)]">
                    Head Chef & Culinary Innovator
                </h2>
            </header>

            {/* Article Section */}
            <section className="max-w-screen-2xl mx-auto bg-[var(--white)] shadow-lg rounded-4xl p-8 md:p-16 flex flex-col md:flex-row gap-12">
                
            {/* Bio */}
            <div className="w-full md:w-3/5 text-justify text-lg md:text-xl leading-relaxed column-count-2 column-gap-10 space-y-6">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[var(--red-dark)]">
                    Lucia Bianchi brought a touch of artistry and heart to Notte Azzura’s culinary creations. Growing up in Rome, she spent her youth exploring family kitchens and perfecting traditional recipes passed down through generations.
                </p>
                <p>
                    Her innovative take on classic Italian dishes helped the restaurant evolve while maintaining its soul — blending nostalgia with creativity and turning every meal into an experience to remember.
                </p>
                <p>
                    Over the years, Lucia has been instrumental in developing seasonal menus, curating signature dishes, and mentoring kitchen staff to combine technical skill with artistic presentation. She believes that cooking is both an art and a conversation, where flavors tell stories and meals create memories.
                </p>
                <p>
                    Today, Lucia continues to experiment with flavors, techniques, and plating, ensuring Notte Azzura remains a destination for those seeking authentic yet inventive Italian cuisine.
                </p>
            </div>

            {/* Image + Quote */}
            <div className="w-full md:w-2/5 flex flex-col items-center md:items-end">
                <img
                    src="/images/Founder03.jpg"
                    alt="Lucia Bianchi"
                    className="w-full max-w-md h-auto rounded-3xl shadow-lg mb-6"
                />
                <blockquote className="text-xl md:text-2xl italic text-[var(--red-dark)] text-right max-w-md border-l-4 border-[var(--red-dark)] pl-4">
                    "Cooking is where tradition meets imagination; every plate is a canvas."
                </blockquote>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Achievements + Philosophy */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
                
            {/* Achievements */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
                    <li>Created signature dishes that blend tradition with modern culinary artistry.</li>
                    <li>Developed seasonal and themed menus that have become central to Notte Azzura’s identity.</li>
                    <li>Featured in culinary publications for innovative approaches to classic Italian cuisine.</li>
                    <li>Mentored kitchen staff to cultivate both technical excellence and creativity.</li>
                    <li>Recognized for her contributions to preserving Italian culinary heritage while innovating contemporary recipes.</li>
                    <li>Collaborated with international chefs and culinary schools to share techniques and inspire new talent.</li>
                </ul>
            </div>

            {/* Philosophy & Style */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--red-dark)] border-b border-[var(--red-dark)] pb-2">
                    Philosophy & Style
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-justify space-y-4">
                    Lucia’s culinary philosophy combines respect for tradition with artistic innovation. She believes that food should evoke emotion, telling a story through flavors, textures, and presentation.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-justify mt-4">
                    Her style emphasizes seasonal ingredients, balanced flavors, and visually striking plating, making each dining experience memorable and deeply connected to Italian culture.
                </p>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Media & Press Mentions */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16">
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Media & Press Mentions
                </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media01.jpg" 
                        alt="Media 1" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Lucia Bianchi transforms traditional Italian cuisine into a culinary art form.” – Culinary Arts Magazine
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media02.jpg" 
                        alt="Media 2" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Her innovative dishes perfectly blend nostalgia with creativity.” – Global Gastronomy
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media03.jpg" 
                        alt="Media 3" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Lucia’s culinary vision brings artistry and heart to every plate.” – Italian Food Review
                    </p>
                </div>
            </div>
            </section>
            </main>
        );
    }

    // Founder 4: Marco DeLuca
    if (id === "4") {
        return (
            <main className="min-h-screen bg-[var(--cream)] text-[var(--red-dark)] font-serif px-6 md:px-16 py-12">
                
            {/* Header */}
            <header className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-wide mb-4">
                    Marco DeLuca
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--green-dark)]">
                    COO & Co-Founder
                </h2>
            </header>

            {/* Article Section */}
            <section className="max-w-screen-2xl mx-auto bg-[var(--white)] shadow-lg rounded-4xl p-8 md:p-16 flex flex-col md:flex-row gap-12">     
            
            {/* Bio */}
            <div className="w-full md:w-3/5 text-justify text-lg md:text-xl leading-relaxed column-count-2 column-gap-10 space-y-6">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[var(--red-dark)]">
                    Marco DeLuca was the driving force behind Notte Azzura’s expansion and quality standards. With a background in hospitality and business, Marco ensured that every restaurant reflected the same warmth and excellence as the original.
                </p>
                <p>
                    His leadership and dedication to the brand’s values built a culture of passion, integrity, and service that continues to define Notte Azzura to this day.
                </p>
                <p>
                    Over the years, Marco has overseen operations, managed strategic growth, and implemented rigorous quality standards across all locations. His expertise ensures that each guest experiences consistent excellence, no matter which Notte Azzura they visit.
                </p>
                <p>
                    Today, Marco continues to innovate in restaurant management, employee training, and operational efficiency, maintaining the high standards that made Notte Azzura a globally recognized brand.
                </p>
            </div>

            {/* Image + Quote */}
            <div className="w-full md:w-2/5 flex flex-col items-center md:items-end">
                <img
                    src="/images/Founder04.jpg"
                    alt="Marco DeLuca"
                    className="w-full max-w-md h-auto rounded-3xl shadow-lg mb-6"
                />
                <blockquote className="text-xl md:text-2xl italic text-[var(--red-dark)] text-right max-w-md border-l-4 border-[var(--red-dark)] pl-4">
                    "Consistency, passion, and care are what transform good food into a memorable experience."
                </blockquote>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Achievements + Philosophy */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
                    
            {/* Achievements */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
                    <li>Oversaw the successful expansion of Notte Azzura to multiple international locations.</li>
                    <li>Implemented high standards of quality, service, and operational efficiency across all restaurants.</li>
                    <li>Developed employee training programs emphasizing hospitality, teamwork, and excellence.</li>
                    <li>Recognized for leadership in managing global restaurant operations and maintaining brand consistency.</li>
                    <li>Contributed to strategic growth initiatives, partnerships, and brand recognition worldwide.</li>
                    <li>Maintains a company culture rooted in integrity, passion, and guest satisfaction.</li>
                </ul>
            </div>

            {/* Philosophy & Style */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--red-dark)] border-b border-[var(--red-dark)] pb-2">
                    Philosophy & Leadership Style
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-justify space-y-4">
                    Marco believes that operational excellence and attention to detail are essential to delivering a memorable dining experience. He emphasizes consistency, staff empowerment, and proactive management to maintain the highest standards.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-justify mt-4">
                    His approach combines strategic thinking with a hands-on understanding of restaurant operations, ensuring that Notte Azzura maintains its warmth, authenticity, and quality across all locations.
                </p>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Media & Press Mentions */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16">
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Media & Press Mentions
                </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media01.jpg" 
                        alt="Media 1" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Marco DeLuca ensures Notte Azzura maintains excellence at every location.” – Hospitality Today
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media02.jpg" 
                        alt="Media 2" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “A visionary in restaurant management and operational leadership.” – Global Dining Review
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                    src="/images/Media03.jpg" 
                    alt="Media 3" 
                    className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                    “Marco’s leadership has built a culture of consistency and passion across all Notte Azzura restaurants.” – Culinary Management Journal
                    </p>
                </div>
            </div>
            </section>
            </main>
        );
    }

    // Founder 5: Alessandro Moretti
    if (id === "5") {
        return (
            <main className="min-h-screen bg-[var(--cream)] text-[var(--red-dark)] font-serif px-6 md:px-16 py-12">
                
            {/* Header */}
            <header className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-wide mb-4">
                    Alessandro Moretti
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--green-dark)]">
                    Head Chef & Culinary Visionary
                </h2>
            </header>

            {/* Article Section */}
            <section className="max-w-screen-2xl mx-auto bg-[var(--white)] shadow-lg rounded-4xl p-8 md:p-16 flex flex-col md:flex-row gap-12">
                    
            {/* Bio */}
            <div className="w-full md:w-3/5 text-justify text-lg md:text-xl leading-relaxed column-count-2 column-gap-10 space-y-6">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[var(--red-dark)]">
                    Alessandro Moretti is a visionary chef who has seamlessly carried the Notte Azzura legacy into the modern era. Born and raised in the heart of Tuscany, Alessandro developed a deep appreciation for the rich culinary traditions of Italy from a young age, spending countless hours in family kitchens learning the art of flavors, textures, and presentation.
                </p>
                <p>
                    Alessandro’s journey has always been guided by a philosophy that food is storytelling — each dish should evoke memories, emotions, and connections. With a meticulous eye for detail, he introduced sustainable sourcing practices, experimented with innovative cooking techniques, and continuously refined recipes to honor both tradition and modern culinary trends.
                </p>
                <p>
                    Beyond the kitchen, Alessandro has been instrumental in mentoring young chefs, fostering a culture of creativity, respect, and excellence. He believes that passing down knowledge and inspiring the next generation is as essential as perfecting the dishes themselves. Through workshops, culinary collaborations, and international events, he ensures that Notte Azzura remains at the forefront of Italian gastronomy.
                </p>
                <p>
                    Alessandro also emphasizes the importance of harmony in a dining experience — from the way a dish is plated to the ambiance in which it is enjoyed. His leadership combines artistry, precision, and heart, ensuring that every meal at Notte Azzura tells a story worth savoring.
                </p>
            </div>

            {/* Image + Quote */}
            <div className="w-full md:w-2/5 flex flex-col items-center md:items-end">
                <img
                    src="/images/Founder05.jpg"
                    alt="Alessandro Moretti"
                    className="w-full max-w-md h-auto rounded-3xl shadow-lg mb-6"
                />
                <blockquote className="text-xl md:text-2xl italic text-[var(--red-dark)] text-right max-w-md border-l-4 border-[var(--red-dark)] pl-4">
                    "Cooking is not just about ingredients; it’s about stories, memories, and the love we share through every plate."
                </blockquote>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Achievements + Philosophy */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
                    
            {/* Achievements */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
                    <li>Introduced sustainable sourcing practices in line with modern culinary trends.</li>
                    <li>Developed innovative cooking techniques while preserving traditional Italian flavors.</li>
                    <li>Created seasonal and thematic menus that modernize classic dishes without losing authenticity.</li>
                    <li>Featured in international culinary magazines for innovation in Italian cuisine.</li>
                    <li>Mentored the next generation of chefs to balance heritage with modern culinary techniques.</li>
                    <li>Played a key role in evolving Notte Azzura’s brand identity for contemporary audiences.</li>
                </ul>
            </div>

            {/* Philosophy & Style */}
            <div className="w-full md:w-1/2 column-count-1 md:column-count-2 column-gap-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--red-dark)] border-b border-[var(--red-dark)] pb-2">
                    Philosophy & Style
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-justify space-y-4">
                    Alessandro believes that modern culinary innovation can coexist with tradition. His style emphasizes seasonal, sustainable ingredients, artistic plating, and thoughtful reinterpretation of classic dishes.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-justify mt-4">
                    By blending heritage with progress, Alessandro ensures that Notte Azzura continues to offer memorable dining experiences that honor the past while embracing the future.
                </p>
            </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12"/>

            {/* Media & Press Mentions */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-16">
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--green-dark)] border-b border-[var(--green-dark)] pb-2">
                    Media & Press Mentions
                </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media01.jpg" 
                        alt="Media 1" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Alessandro Moretti modernizes traditional Italian cuisine with respect and creativity.” – Culinary Today
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media02.jpg" 
                        alt="Media 2" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “A visionary chef blending heritage with modern techniques.” – Global Gastronomy
                    </p>
                </div>
                <div className="bg-[var(--white)] shadow-lg rounded-3xl p-6 flex flex-col items-start">
                    <img 
                        src="/images/Media03.jpg" 
                        alt="Media 3" 
                        className="w-full h-65 object-cover mb-4 rounded-2xl"
                    />
                    <p className="text-lg md:text-xl italic text-[var(--gray-dark)]">
                        “Alessandro’s philosophy ensures each dish tells a story worth savoring.” – Italian Culinary Review
                    </p>
                </div>
            </div>
            </section>
            </main>
        );
    }
    // Bila tidak ada founder yang cocok
    return <p className="text-center mt-20 text-xl">Founder not found.</p>;
};