import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, phone, password } = await request.json();

  if (!name || !email || !phone || !password) {
    return NextResponse.json(
      { error: "Semua field wajib diisi" },
      { status: 400 }
    );
  }

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) {
    return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, phone, password: hash },
  });

  return NextResponse.json({
    message: "Registrasi berhasil",
    user: { id: user.id, name: user.name, phone: user.phone, email: user.email },
  });
}