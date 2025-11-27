import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, name, email, phone, guests, message } = body;

    // Validate required fields
    if (!eventId || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate guests number
    const guestCount = Number(guests);
    if (isNaN(guestCount) || guestCount <= 0) {
      return NextResponse.json(
        { error: 'Invalid guest count' },
        { status: 400 }
      );
    }

    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { id: Number(eventId) }
    });

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    const spotsLeft = event.capacity - event.registered;
    if (spotsLeft < guestCount) {
      return NextResponse.json(
        { error: 'Not enough spots available' },
        { status: 400 }
      );
    }

    const safeMessage =
      message && message.trim() !== "" ? message : null;

    const registration = await prisma.eventRegistration.create({
      data: {
        eventId: Number(eventId),
        name,
        email,
        phone,
        guests: guestCount,
        message: safeMessage
      }
    });

    // Update event registered count
    await prisma.event.update({
      where: { id: Number(eventId) },
      data: {
        registered: {
          increment: guestCount
        }
      }
    });

    return NextResponse.json({
      success: true,
      registration
    });
  } catch (error) {
    console.error("Error creating registration:", error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}