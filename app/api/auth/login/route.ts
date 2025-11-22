import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Email tidak ditemukan" }, { status: 404 });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  const token = signToken({
    id: user.id,
    email: user.email,
  });

  return NextResponse.json({
    message: "Login berhasil",
    token,
  });
}