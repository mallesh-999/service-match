import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json(await prisma.professional.findMany());
}

export async function POST(req: Request) {
  const body = await req.json();
  const professional = await prisma.professional.create({ data: body });
  return NextResponse.json(professional);
}
