import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string; password?: string; name?: string };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const name = typeof body.name === "string" ? body.name.trim() : null;

    if (!email || !password || password.length < 6) {
      return NextResponse.json({ error: "Invalid email or password (min 6 characters)." }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already registered." }, { status: 409 });
    }

    const hash = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        email,
        password: hash,
        name: name || null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Registration failed." }, { status: 500 });
  }
}
