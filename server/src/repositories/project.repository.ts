import { prisma } from "../config/database";

export async function getAllProjects() {
  return prisma.project.findMany({ orderBy: { order: "asc" } });
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({ where: { id } });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({ where: { slug } });
}

export async function createProjectRecord(data: any) {
  return prisma.project.create({ data });
}

export async function updateProjectRecord(id: string, data: any) {
  return prisma.project.update({ where: { id }, data });
}

export async function deleteProjectRecord(id: string) {
  return prisma.project.delete({ where: { id } });
}

export async function reorderProjects(order: string[]) {
  const updates = order.map((id, idx) =>
    prisma.project.update({ where: { id }, data: { order: idx } }),
  );
  return prisma.$transaction(updates);
}
