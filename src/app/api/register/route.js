import bcrypt from "bcrypt";
import prisma from "../../lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const { email, name, password } = body;

  if (!name || !password || !email) {
    return new NextResponse("Missing Fields", {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exist) {
    throw new Error("Email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
