import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Event {
  slug: string;
  title: string;
    date: Date;
    time: string;
    price: number;
    category: string;
    images: string[];
    shortDesc: string;
    fullDesc: string;
    highlights: string[];
    capacity: number;
    registered: number;
}

async function main() {
  // Clear existing data
  await prisma.eventRegistration.deleteMany({});
  await prisma.event.deleteMany({});

  // Seed events
  const events = [
    {
      slug: "wine-tasting-tuscany",
      title: "Wine Tasting: Flavors of Tuscany",
      date: new Date("2024-12-15"),
      time: "19:00 - 22:00",
      price: 45,
      category: "Wine Tasting",
      images: [
        "https://i.pinimg.com/736x/5d/09/49/5d0949ec57cd170a57ccdf0cec883adc.jpg",
        "https://i.pinimg.com/736x/ad/10/14/ad101499e074b15d605d422b47b0f07e.jpg",
        "https://i.pinimg.com/1200x/7c/0c/f2/7c0cf209dd721ee2910fca0d2dd948e3.jpg"
      ],
      shortDesc: "Experience the finest wines from Tuscany paired with authentic Italian appetizers.",
      fullDesc: "Join us for an exclusive evening celebrating the wines of Tuscany. Our sommelier will guide you through a selection of 6 premium wines, each paired with carefully chosen Italian appetizers. Learn about the history, terroir, and winemaking traditions of this iconic region.",
      highlights: [
        "6 premium Tuscan wines",
        "Authentic Italian appetizer pairings",
        "Expert sommelier guidance",
        "Wine region history & education"
      ],
      capacity: 30,
      registered: 18
    },
    {
      slug: "pasta-making-masterclass",
      title: "Pasta Making Masterclass",
      date: new Date("2024-12-20"),
      time: "14:00 - 17:00",
      price: 65,
      category: "Cooking Class",
      images: [
        "https://i.pinimg.com/736x/40/a9/79/40a97975515355dbd31414342fad0551.jpg",
        "https://i.pinimg.com/736x/71/36/eb/7136eb9da7a8994cf7e9a72fb14b8f2d.jpg",
        "https://i.pinimg.com/1200x/16/37/51/163751e53c4f337b50b0eb9694181ef2.jpg"
      ],
      shortDesc: "Learn the art of handmade pasta from our Italian chef.",
      fullDesc: "Discover the secrets of authentic Italian pasta making in this hands-on masterclass. Our head chef will teach you how to make fresh pasta from scratch, including fettuccine, ravioli, and gnocchi. You'll learn traditional techniques passed down through generations and enjoy your creations at the end of class.",
      highlights: [
        "Hands-on pasta making experience",
        "Learn 3 different pasta types",
        "Traditional Italian techniques",
        "Take home your creations",
        "Complimentary wine included"
      ],
      capacity: 20,
      registered: 15
    },
    {
      slug: "christmas-feast",
      title: "Christmas Italian Feast",
      date: new Date("2024-12-24"),
      time: "18:00 - 23:00",
      price: 85,
      category: "Special Event",
      images: [
        "https://i.pinimg.com/736x/b8/8a/e3/b88ae3d84b8e6ab6a9e48d1d7ec6ca03.jpg",
        "https://i.pinimg.com/1200x/5d/14/91/5d1491a24c8196b0769937b00bd86e5d.jpg",
        "https://i.pinimg.com/1200x/73/0a/a3/730aa3928989fc1eb7190b9c6d9696f2.jpg"
      ],
      shortDesc: "Celebrate Christmas Eve with a traditional Italian feast.",
      fullDesc: "Experience an authentic Italian Christmas celebration with our special 7-course feast. Enjoy traditional dishes like Feast of the Seven Fishes, homemade panettone, and regional specialties, all accompanied by live Italian music and a festive atmosphere.",
      highlights: [
        "7-course traditional Italian menu",
        "Live Italian music performance",
        "Festive decorations & atmosphere",
        "Complimentary prosecco welcome drink",
        "Special Christmas dessert selection"
      ],
      capacity: 50,
      registered: 42
    },
    {
      slug: "truffle-dinner",
      title: "White Truffle Dinner Experience",
      date: new Date("2025-01-10"),
      time: "19:30 - 22:30",
      price: 120,
      category: "Exclusive Dining",
      images: [
        "https://i.pinimg.com/736x/47/6f/03/476f03fc95aef01ed4d325a7a268b326.jpg",
        "https://i.pinimg.com/1200x/c2/77/79/c27779e635f81dfb4e8616f2b6fd938e.jpg",
        "https://i.pinimg.com/736x/08/31/ab/0831ab19fc584c959fd5f3c65295b9a4.jpg"
      ],
      shortDesc: "An exclusive evening featuring rare white truffles from Alba.",
      fullDesc: "Indulge in the luxury of white truffles in this exclusive dining experience. Each course of our specially crafted 5-course menu features fresh white truffles from Alba, Italy. Our chef will showcase the versatility of this prized ingredient in both traditional and innovative preparations.",
      highlights: [
        "5-course truffle-focused menu",
        "Fresh white truffles from Alba",
        "Wine pairing included",
        "Limited to 25 guests",
        "Meet the chef experience"
      ],
      capacity: 25,
      registered: 20
    },
    {
      slug: "italian-street-food",
      title: "Italian Street Food Night",
      date: new Date("2025-01-18"),
      time: "18:00 - 22:00",
      price: 35,
      category: "Special Event",
      images: [
        "https://i.pinimg.com/1200x/2b/f1/a7/2bf1a72cfc7751189e7e53bdbbdcd1cb.jpg",
        "https://i.pinimg.com/1200x/8b/51/e6/8b51e6e5b768cc4e0de632f50f12502e.jpg",
        "https://i.pinimg.com/736x/f8/ad/7f/f8ad7f7e36cfd2862ef35f836bff33e5.jpg"
      ],
      shortDesc: "Explore the flavors of Italian street food from different regions.",
      fullDesc: "Take a culinary journey through Italy's streets with this casual and fun event. Sample authentic street food from various Italian regions, including arancini, supplì, porchetta sandwiches, and more. Enjoy a relaxed atmosphere with Italian music and aperitivo culture.",
      highlights: [
        "Unlimited street food tastings",
        "10+ different regional specialties",
        "Italian craft beer selection",
        "Live DJ with Italian music",
        "Casual, social atmosphere"
      ],
      capacity: 60,
      registered: 25
    },
    {
      slug: "valentines-dinner",
      title: "Valentine's Day Romance",
      date: new Date("2025-02-14"),
      time: "19:00 - 23:00",
      price: 95,
      category: "Special Event",
      images: [
        "https://i.pinimg.com/736x/f3/7e/e2/f37ee2e13dee690aeac94a13c20cb197.jpg",
        "https://i.pinimg.com/1200x/69/04/2d/69042da0fa206eb5c96ddc1f50c4a541.jpg",
        "https://i.pinimg.com/736x/7c/15/bf/7c15bfad4d44b1775ccc71cd2cf25899.jpg"
      ],
      shortDesc: "A romantic evening for two with exquisite Italian cuisine.",
      fullDesc: "Celebrate love with an unforgettable Valentine's dinner. Enjoy a specially curated 6-course tasting menu designed for two, featuring aphrodisiac ingredients and romantic Italian classics. The evening includes candlelight, rose petals, live violin music, and a complimentary photo to remember the night.",
      highlights: [
        "6-course romantic tasting menu",
        "Complimentary champagne toast",
        "Live violin performance",
        "Candlelit ambiance",
        "Professional couple's photo",
        "Rose & chocolate gifts"
      ],
      capacity: 40,
      registered: 38
    }
  ];

  for (const event of events) {
    await prisma.event.create({
        data: event as Event
    });
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });