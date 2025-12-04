import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, name, email, phone, guests, message } = body;

    if (!eventId || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const event = await prisma.event.findUnique({
      where: { id: eventId }
    });

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    const spotsLeft = event.capacity - event.registered;
    if (spotsLeft < guests) {
      return NextResponse.json(
        { error: 'Not enough spots available' },
        { status: 400 }
      );
    }
    const registrationMessage = message && message.trim() === '' ? null : message;

    const registration = await prisma.eventRegistration.create({
      data: {
        eventId,
        name,
        email,
        phone,
        guests,
        message: registrationMessage || null
      }
    });

    await prisma.event.update({
      where: { id: eventId },
      data: {
        registered: {
          increment: guests
        }
      }
    });

    return NextResponse.json({
      success: true,
      registration
    });
  } catch (error) {
    console.error('Error creating registration:', error);
    return NextResponse.json(
      { error: 'Failed to create registration' },
      { status: 500 }
    );
  }
}