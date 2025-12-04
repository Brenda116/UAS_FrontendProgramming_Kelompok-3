import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    const event = await prisma.event.findUnique({
      where: { slug },
    });

    if (!event) {
      return Response.json({ error: "Event not found" }, { status: 404 });
    }

    return Response.json({
      ...event,
      images: Array.isArray(event.images)
        ? event.images
        : JSON.parse(event.images as any),

      highlights: Array.isArray(event.highlights)
        ? event.highlights
        : JSON.parse(event.highlights as any),
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
