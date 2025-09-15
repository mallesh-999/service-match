// app/api/jobs/route.ts (Next.js 13+)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const jobs = await prisma.job.findMany();
  return new Response(JSON.stringify(jobs), { status: 200 });
}
