import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request, { params }: { params: { jobId: string } }) {
  const { professionalId } = await req.json();
  const jobId = parseInt(params.jobId);

  const updatedJob = await prisma.job.update({
    where: { id: jobId },
    data: { hiredById: professionalId },
    include: { postedBy: true, hiredBy: true },
  });

  return NextResponse.json(updatedJob);
}
