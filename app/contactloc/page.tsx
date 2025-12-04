"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [currentFormImage, setCurrentFormImage] = useState(0);
  const [currentEventImage, setCurrentEventImage] = useState(0);
  const [currentSocialIcon, setCurrentSocialIcon] = useState(0);

  const formImages = [
    "https://i.pinimg.com/1200x/5c/6a/d4/5c6ad4d9a9440ca979884e8e3b17eaf2.jpg",
    "https://i.pinimg.com/736x/b2/55/88/b255882221116dea71f84377d4406b38.jpg",
    "https://i.pinimg.com/1200x/69/16/23/691623d9001418e653a58f2fa2517fd2.jpg"
  ];

  const eventImages = [
    "https://i.pinimg.com/736x/16/2c/87/162c87b619a9761f33afeda1616c235f.jpg",
    "https://i.pinimg.com/736x/74/88/fe/7488fe51f334051a39bfefc0229205ae.jpg",
    "https://i.pinimg.com/736x/c5/98/50/c59850de0769bca7dfc25d2133b287e9.jpg"
  ];

  const socialIcons = [
    { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
    { name: "TikTok", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const formImageInterval = setInterval(() => {
      setCurrentFormImage((prev) => (prev + 1) % formImages.length);
    }, 5000);

    const eventImageInterval = setInterval(() => {
      setCurrentEventImage((prev) => (prev + 1) % eventImages.length);
    }, 5000);

    const socialIconInterval = setInterval(() => {
      setCurrentSocialIcon((prev) => (prev + 1) % socialIcons.length);
    }, 4000);

    return () => {
      clearInterval(formImageInterval);
      clearInterval(eventImageInterval);
      clearInterval(socialIconInterval);
    };
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ email: "", name: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  const handleNewsletterSubmit = () => {
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  const instagramPosts = [
    {
      img: "https://i.pinimg.com/1200x/7d/b3/d6/7db3d6c9d49de1283718fdc2a63ed290.jpg",
      likes: "777",
      comments: "28",
      caption: "Wine tasting perfection ✨"
    },
    {
      img: "https://i.pinimg.com/736x/40/a9/79/40a97975515355dbd31414342fad0551.jpg",
      likes: "189",
      comments: "15",
      caption: "Handmade pasta magic 🍝"
    },
    {
      img: "https://i.pinimg.com/736x/5c/64/a6/5c64a659499b65acd4e32d1b31ca23cc.jpg",
      likes: "312",
      comments: "42",
      caption: "Christmas feast vibes 🎄"
    },
    {
      img: "https://i.pinimg.com/736x/19/4b/45/194b45d821a6ca9270b74a0f1d671143.jpg",
      likes: "267",
      comments: "33",
      caption: "Truffle heaven 🤍"
    },
    {
      img: "https://i.pinimg.com/1200x/1a/90/63/1a906307e9add77b67feff996f8c0760.jpg",
      likes: "198",
      comments: "21",
      caption: "Street food delights 🌟"
    },
    {
      img: "https://i.pinimg.com/736x/07/42/03/0742034fe80f43b9a41ebf96697be940.jpg",
      likes: "421",
      comments: "56",
      caption: "Romance in every bite 💕"
    },
    {
      img: "https://i.pinimg.com/736x/59/6d/9c/596d9ceb312033df98f585739fedeb14.jpg",
      likes: "176",
      comments: "18",
      caption: "Tuscan dreams 🍷"
    },
    {
      img: "https://i.pinimg.com/736x/2f/3b/e6/2f3be6fcf2c0024d9525351d5def5bb5.jpg",
      likes: "203",
      comments: "24",
      caption: "Fresh from the kitchen 👨‍🍳"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#E1D9CB] text-[#821F06] min-h-screen font-serif">
        
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          @keyframes shine {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .hover-shimmer {
            position: relative;
            overflow: hidden;
          }

          .hover-shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
          }

          .hover-shimmer:hover::before {
            left: 100%;
          }

          .hover-shine {
            position: relative;
            overflow: hidden;
          }

          .hover-shine::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -100%;
            width: 50%;
            height: 200%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transform: rotate(25deg);
            animation: shine 3s infinite;
          }

          .hover-float:hover {
            animation: float 1s ease-in-out infinite;
          }

          .hover-pulse:hover {
            animation: pulse 1s ease-in-out infinite;
          }
        `}</style>

        {/* Hero Section */}
        <div className="pt-16 md:pt-20">
          <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-gradient-to-b from-[#821F06] to-[#E1D9CB] text-white">
            <h1 className="relative text-4xl md:text-5xl font-bold tracking-widest text-center animate-fadeIn">
              CONTACT US
            </h1>
          </section>
        </div>

        {/* Contact Information Cards */}
        <section className="flex flex-col md:flex-row bg-white shadow-lg rounded-3xl overflow-hidden mx-auto my-12 w-[90%] md:w-full max-w-screen-lg hover-shimmer transition-all duration-300 hover:shadow-2xl animate-fadeIn">
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 text-center border-b md:border-b-0 md:border-r border-[#E1D9CB] hover:bg-[#F9F7F4] transition-all duration-300">
            <div className="w-16 h-16 bg-[#7D8D36] rounded-full flex items-center justify-center mb-4 hover-pulse transition-all duration-300 hover:bg-[#9AAA52]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#821F06] mb-2">Phone</h3>
            <p className="text-[#821F06] font-medium text-lg">+44 20 7946 0958</p>
            <p className="text-[#8A837A] text-sm mt-1">Mon - Sat: 9AM - 8PM</p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 text-center border-b md:border-b-0 md:border-r border-[#E1D9CB] hover:bg-[#F9F7F4] transition-all duration-300">
            <div className="w-16 h-16 bg-[#7D8D36] rounded-full flex items-center justify-center mb-4 hover-pulse transition-all duration-300 hover:bg-[#9AAA52]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#821F06] mb-2">Email</h3>
            <p className="text-[#821F06] font-medium">hello@notteazzurra.co.uk</p>
            <p className="text-[#8A837A] text-sm mt-1">We reply within 24 hours</p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 text-center hover:bg-[#F9F7F4] transition-all duration-300">
            <div className="w-16 h-16 bg-[#7D8D36] rounded-full flex items-center justify-center mb-4 hover-pulse transition-all duration-300 hover:bg-[#9AAA52]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#821F06] mb-2">Location</h3>
            <p className="text-[#821F06] font-medium">London Eye, UK</p>
            <p className="text-[#8A837A] text-sm mt-1">Riverside Building, County Hall</p>
          </div>
        </section>

        {/* Get In Touch Form Card */}
        <section className="flex flex-col md:flex-row bg-white shadow-lg rounded-3xl overflow-hidden mx-auto my-12 w-[90%] md:w-full max-w-screen-lg h-auto hover-shimmer transition-all duration-300 hover:shadow-2xl animate-fadeIn">
          <div className="h-60 md:h-auto w-full md:w-1/2 overflow-hidden relative">
            {formImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Restaurant Interior"
                className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ${
                  index === currentFormImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              />
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#821F06] mb-4 animate-fadeIn">
              Get In Touch
            </h2>
            <p className="text-sm text-[#7D8D36] italic uppercase tracking-widest mb-4 animate-fadeIn">
              — We'd Love to Hear From You —
            </p>
            <p className="text-sm md:text-base text-[#4A453E] leading-relaxed mb-6 animate-fadeIn">
              Have a question about our authentic Italian cuisine? Want to make a reservation or discuss catering options? Send us a message and we'll get back to you soon.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition duration-300" />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition duration-300" />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-[#D3CDC4] rounded-lg focus:outline-none focus:border-[#7D8D36] transition duration-300 resize-none" />

              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-[#821F06] text-white text-base font-medium rounded-full shadow-md hover:bg-[#601504] transition-all duration-300 hover:shadow-xl hover-shine transform hover:-translate-y-1"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>

              {formStatus === "success" && (
                <div className="text-center text-[#7D8D36] font-medium animate-fadeIn">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Our Location Card */}
        <section className="group flex flex-col md:flex-row bg-white shadow-lg rounded-3xl overflow-hidden mx-auto my-12 w-[90%] md:w-full max-w-screen-lg h-auto relative transition-all duration-500 hover-shimmer hover:shadow-2xl animate-fadeIn">
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 text-center overflow-hidden">
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#821F06] mb-4 animate-fadeIn">
                Our Location
              </h2>
            </div>

            <div className="space-y-3 text-base md:text-lg leading-relaxed text-[#4A453E] max-w-md text-justify transition-opacity duration-500 group-hover:opacity-0">
              <p className="text-sm text-[#7D8D36] italic uppercase tracking-widest animate-fadeIn">
                — Visit Us at the Iconic London Eye —
              </p>
              <p className="animate-fadeIn text-sm">
                <strong>Notte Azzura near London Eye</strong><br />
                Riverside Building, County Hall,<br />
                Westminster Bridge Rd,<br />
                London SE1 7PB, United Kingdom
              </p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-sm md:text-lg leading-relaxed text-[#4A453E] max-w-md text-justify">
                Experience authentic Italian flavors with a stunning Thames-side view. Our riverside location offers the perfect backdrop for an unforgettable dining experience.
              </p>
              <br />
              <p className="text-sm md:text-lg leading-relaxed text-[#4A453E] max-w-md text-justify">
                Whether you're celebrating a special occasion or enjoying a casual meal, our prime location near the London Eye makes every visit memorable.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540799914099!2d-0.11957!3d51.503187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207PB%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-300 hover:brightness-95"
            ></iframe>
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
        
        {/* Instagram Gallery Section */}
        <section className="relative py-20">
          <div className="w-full max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#821F06] mb-3">
                Follow Our Journey
              </h2>
              <p className="text-lg text-[#4A453E] italic">
                @notteazzura — Share your moments with us
              </p>
              <a 
                href="https://instagram.com/notteazzura" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-[#821F06] to-[#7D8D36] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Follow Us on Instagram
              </a>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instagramPosts.map((post, idx) => (
                <div 
                  key={idx}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                >
                  <img 
                    src={post.img}
                    alt={`Instagram post ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center gap-4 text-white mb-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-white text-sm font-medium">{post.caption}</p>
                  </div>

                  {/* Instagram Icon */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-[#821F06]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider Hero */}
        <section className="relative w-full h-[35vh] md:h-[50vh] mx-auto mt-12 flex flex-col items-center justify-center text-center bg-[#821F06] text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest animate-fadeIn">
            NOTTE AZZURA
          </h2>
          <p className="mt-2 text-base italic text-[#E1D9CB] tracking-widest animate-fadeIn delay-200">
            — mangiare bene è vivere bene —
          </p>
        </section>

        {/* Events & Social Media Cards with Gradient */}
        <section className="relative w-full py-20 bg-gradient-to-b from-[#C9BFB1]  to-[#821F06]">
          <div className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            
            {/* Events Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 pb-8 hover-shimmer transform hover:-translate-y-2">
              <div className="overflow-hidden w-full h-64 relative">
                {eventImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Events"
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ${
                      index === currentEventImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#821F06] mb-3 animate-fadeIn">
                  Upcoming Events
                </h3>
                <p className="text-[#4A453E] text-base leading-relaxed animate-fadeIn">
                  Join us for exclusive Italian culinary experiences, wine tastings, cooking classes, and special holiday celebrations.
                </p>
              </div>
              <a
                href="/events"
                className="px-6 py-2 bg-[#821F06] text-white text-base rounded-full shadow-md hover:bg-[#601504] transition-all duration-300 hover:shadow-xl hover-shine transform hover:-translate-y-1"
              >
                Explore Events →
              </a>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 pb-8 hover-shimmer transform hover:-translate-y-2">
              <div className="w-full h-64 bg-gradient-to-br from-[#7D8D36] to-[#9AAA52] flex items-center justify-center overflow-hidden relative">
                {socialIcons.map((icon, index) => (
                  <svg 
                    key={index}
                    className={`w-24 h-24 text-white absolute transition-all duration-1000 ${
                      index === currentSocialIcon ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
                    }`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#821F06] mb-3 animate-fadeIn">
                  Follow Us
                </h3>
                <p className="text-[#4A453E] text-base leading-relaxed mb-4 animate-fadeIn">
                  Stay connected for daily specials, behind-the-scenes content, and Italian culinary inspiration!
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="https://www.facebook.com/" className="w-12 h-12 bg-[#7D8D36] rounded-full flex items-center justify-center hover:bg-[#9AAA52] transition-all duration-300 hover-shine transform hover:scale-110 hover:rotate-12">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" className="w-12 h-12 bg-[#7D8D36] rounded-full flex items-center justify-center hover:bg-[#9AAA52] transition-all duration-300 hover-shine transform hover:scale-110 hover:rotate-12">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/en/" className="w-12 h-12 bg-[#7D8D36] rounded-full flex items-center justify-center hover:bg-[#9AAA52] transition-all duration-300 hover-shine transform hover:scale-110 hover:rotate-12">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
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