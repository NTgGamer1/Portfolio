import bcrypt from "bcryptjs";
import pkg from "@prisma/client";
const { PrismaClient } = pkg as any;

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Admin123!", 10);

  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { name: "Administrator", passwordHash },
    create: {
      email: "admin@example.com",
      passwordHash,
      name: "Administrator",
    },
  });

  await prisma.hero.upsert({
    where: { id: "hero-default" },
    update: {},
    create: {
      id: "hero-default",
      title: "Welcome to Project 001",
      subtitle: "A production-grade portfolio platform.",
      ctaText: "View projects",
      ctaUrl: "/projects",
      show: true,
    },
  });

  await prisma.project.upsert({
    where: { slug: "project-001" },
    update: {},
    create: {
      title: "Project 001",
      slug: "project-001",
      description: "A full-stack portfolio platform built for modern creators.",
      shortDescription: "Clean architecture, admin dashboard, and public portfolio pages.",
      techStack: ["React", "Express", "PostgreSQL", "Prisma"],
      imageUrl: "",
      url: "",
      repoUrl: "",
      featured: true,
      visible: true,
      order: 0,
    },
  });

  await prisma.skill.createMany({
    data: [
      { name: "TypeScript", level: "Advanced", category: "Frontend", order: 0 },
      { name: "Node.js", level: "Advanced", category: "Backend", order: 1 },
    ],
    skipDuplicates: true,
  });

  await prisma.certification.createMany({
    data: [
      {
        name: "Full Stack Certification",
        issuer: "Online Academy",
        issueDate: new Date("2025-01-01"),
        visible: true,
        order: 0,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.education.createMany({
    data: [
      {
        institution: "University of Technology",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: new Date("2020-09-01"),
        endDate: new Date("2024-05-31"),
        description: "Focused on software engineering and system design.",
        visible: true,
        order: 0,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.experience.createMany({
    data: [
      {
        company: "Creative Agency",
        title: "Frontend Developer",
        startDate: new Date("2024-06-01"),
        endDate: null,
        location: "Remote",
        responsibilities: "Building responsive web experiences.",
        visible: true,
        order: 0,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.contactMessage.create({
    data: {
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Hello",
      message: "Looking forward to seeing the new portfolio platform!",
    },
  });

  await prisma.seoSetting.upsert({
    where: { id: "seo-default" },
    update: {},
    create: {
      id: "seo-default",
      title: "Project 001 Portfolio",
      description: "A modern portfolio platform with admin control and public showcase.",
      keywords: ["portfolio", "developer", "project 001"],
    },
  });

  await prisma.siteSetting.upsert({
    where: { id: "site-default" },
    update: {},
    create: {
      id: "site-default",
      authors: ["Project Owner"],
      siteUrl: "https://example.com",
      theme: "DARK",
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
