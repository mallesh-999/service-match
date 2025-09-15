import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json(await prisma.user.findMany());
}

export async function POST(req: Request) {
  const body = await req.json();
  const user = await prisma.user.create({ data: body });
  return NextResponse.json(user);
}
