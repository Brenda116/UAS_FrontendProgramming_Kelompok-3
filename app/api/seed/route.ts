import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const events = [
      {
        slug: "wine-tasting-tuscany",
        title: "Wine Tasting: Flavors of Tuscany",
        date: new Date("2024-12-15"),
        time: "19:00 - 22:00",
        price: 45,
        category: "Wine Tasting",
        capacity: 30,
        registered: 18,
        images: [
          "https://i.pinimg.com/736x/16/2c/87/162c87b619a9761f33afeda1616c235f.jpg",
          "https://i.pinimg.com/736x/8d/25/90/8d2590c9d5e8eaa35e33e5f5db8f5b8e.jpg",
          "https://i.pinimg.com/736x/ab/12/34/ab123456789012345678901234567890.jpg"
        ],
        shortDesc: "Experience the finest wines from Tuscany paired with authentic Italian appetizers.",
        fullDesc: "Join us for an exclusive evening celebrating the wines of Tuscany. Our sommelier will guide you through a selection of 6 premium wines, each paired with carefully chosen Italian appetizers. Learn about the history, terroir, and winemaking traditions of this iconic region.",
        highlights: [
          "6 premium Tuscan wines",
          "Authentic Italian appetizer pairings",
          "Expert sommelier guidance",
          "Wine region history & education"
        ]
      },
      {
        slug: "pasta-making-masterclass",
        title: "Pasta Making Masterclass",
        date: new Date("2024-12-20"),
        time: "14:00 - 17:00",
        price: 65,
        category: "Cooking Class",
        capacity: 20,
        registered: 15,
        images: [
          "https://i.pinimg.com/736x/74/88/fe/7488fe51f334051a39bfefc0229205ae.jpg",
          "https://i.pinimg.com/736x/2a/cd/ef/2acdef123456789012345678901234.jpg",
          "https://i.pinimg.com/736x/5b/de/01/5bde01234567890123456789012345.jpg"
        ],
        shortDesc: "Learn the art of handmade pasta from our Italian chef.",
        fullDesc: "Discover the secrets of authentic Italian pasta making in this hands-on masterclass. Our head chef will teach you how to make fresh pasta from scratch, including fettuccine, ravioli, and gnocchi. You'll learn traditional techniques passed down through generations and enjoy your creations at the end of class.",
        highlights: [
          "Hands-on pasta making experience",
          "Learn 3 different pasta types",
          "Traditional Italian techniques",
          "Take home your creations",
          "Complimentary wine included"
        ]
      },
      {
        slug: "christmas-feast",
        title: "Christmas Italian Feast",
        date: new Date("2024-12-24"),
        time: "18:00 - 23:00",
        price: 85,
        category: "Special Event",
        capacity: 50,
        registered: 42,
        images: [
          "https://i.pinimg.com/736x/c5/98/50/c59850de0769bca7dfc25d2133b287e9.jpg",
          "https://i.pinimg.com/736x/3c/45/67/3c456789012345678901234567890123.jpg",
          "https://i.pinimg.com/736x/8d/89/ab/8d89ab012345678901234567890123.jpg"
        ],
        shortDesc: "Celebrate Christmas Eve with a traditional Italian feast.",
        fullDesc: "Experience an authentic Italian Christmas celebration with our special 7-course feast. Enjoy traditional dishes like Feast of the Seven Fishes, homemade panettone, and regional specialties, all accompanied by live Italian music and a festive atmosphere.",
        highlights: [
          "7-course traditional Italian menu",
          "Live Italian music performance",
          "Festive decorations & atmosphere",
          "Complimentary prosecco welcome drink",
          "Special Christmas dessert selection"
        ]
      },
      {
        slug: "truffle-dinner",
        title: "White Truffle Dinner Experience",
        date: new Date("2025-01-10"),
        time: "19:30 - 22:30",
        price: 120,
        category: "Exclusive Dining",
        capacity: 25,
        registered: 20,
        images: [
          "https://i.pinimg.com/736x/b2/55/88/b255882221116dea71f84377d4406b38.jpg",
          "https://i.pinimg.com/736x/4d/56/78/4d567890123456789012345678901234.jpg",
          "https://i.pinimg.com/736x/9e/01/23/9e012345678901234567890123456789.jpg"
        ],
        shortDesc: "An exclusive evening featuring rare white truffles from Alba.",
        fullDesc: "Indulge in the luxury of white truffles in this exclusive dining experience. Each course of our specially crafted 5-course menu features fresh white truffles from Alba, Italy. Our chef will showcase the versatility of this prized ingredient in both traditional and innovative preparations.",
        highlights: [
          "5-course truffle-focused menu",
          "Fresh white truffles from Alba",
          "Wine pairing included",
          "Limited to 25 guests",
          "Meet the chef experience"
        ]
      },
      {
        slug: "italian-street-food",
        title: "Italian Street Food Night",
        date: new Date("2025-01-18"),
        time: "18:00 - 22:00",
        price: 35,
        category: "Special Event",
        capacity: 60,
        registered: 25,
        images: [
          "https://i.pinimg.com/736x/69/16/23/691623d9001418e653a58f2fa2517fd2.jpg",
          "https://i.pinimg.com/736x/5e/67/89/5e678901234567890123456789012345.jpg",
          "https://i.pinimg.com/736x/0f/12/34/0f123456789012345678901234567890.jpg"
        ],
        shortDesc: "Explore the flavors of Italian street food from different regions.",
        fullDesc: "Take a culinary journey through Italy's streets with this casual and fun event. Sample authentic street food from various Italian regions, including arancini, supplì, porchetta sandwiches, and more. Enjoy a relaxed atmosphere with Italian music and aperitivo culture.",
        highlights: [
          "Unlimited street food tastings",
          "10+ different regional specialties",
          "Italian craft beer selection",
          "Live DJ with Italian music",
          "Casual, social atmosphere"
        ]
      },
      {
        slug: "valentines-dinner",
        title: "Valentine's Day Romance",
        date: new Date("2025-02-14"),
        time: "19:00 - 23:00",
        price: 95,
        category: "Special Event",
        capacity: 40,
        registered: 38,
        images: [
          "https://i.pinimg.com/1200x/5c/6a/d4/5c6ad4d9a9440ca979884e8e3b17eaf2.jpg",
          "https://i.pinimg.com/736x/6f/78/90/6f789012345678901234567890123456.jpg",
          "https://i.pinimg.com/736x/1g/23/45/1g234567890123456789012345678901.jpg"
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
        ]
      }
    ];

    const results = [];
    for (const event of events) {
      const created = await prisma.event.upsert({
        where: { slug: event.slug },
        update: event,
        create: event,
      });
      results.push(created);
    }

    return NextResponse.json({
      success: true,
      message: 'Events seeded successfully',
      count: results.length,
      events: results
    });

  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed events' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}