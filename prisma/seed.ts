import prisma from "./lib/prisma"; // adjust path if needed

async function main() {
  await prisma.job.createMany({
    data: [
      { title: "Frontend Developer", company: "Acme Corp", location: "Remote" },
      { title: "Backend Developer", company: "Globex", location: "New York" },
      { title: "Fullstack Engineer", company: "Initech", location: "London" },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
