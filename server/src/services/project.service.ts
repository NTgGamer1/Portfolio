import { z } from "zod";
import { ProjectCreateRequest, ProjectUpdateRequest } from "../types/project.types";
import {
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  createProjectRecord,
  updateProjectRecord,
  deleteProjectRecord,
  reorderProjects,
} from "../repositories/project.repository";

const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  shortDescription: z.string(),
  techStack: z.array(z.string()),
  imageUrl: z.string().optional(),
  url: z.string().optional(),
  repoUrl: z.string().optional(),
  featured: z.boolean().optional(),
  visible: z.boolean().optional(),
  order: z.number().optional(),
});

export async function listProjects() {
  return getAllProjects();
}

export async function findProjectByIdOrSlug(idOrSlug: string) {
  const byId = await getProjectById(idOrSlug);
  if (byId) return byId;
  return getProjectBySlug(idOrSlug);
}

export async function createProject(data: ProjectCreateRequest) {
  const parsed = projectSchema.parse(data);
  return createProjectRecord(parsed);
}

export async function updateProject(id: string, data: ProjectUpdateRequest) {
  const parsed = projectSchema.partial().parse(data);
  return updateProjectRecord(id, parsed as any);
}

export async function removeProject(id: string) {
  return deleteProjectRecord(id);
}

export async function reorderProjectList(order: string[]) {
  return reorderProjects(order);
}

