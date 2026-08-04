import { ProjectCreateRequest, ProjectUpdateRequest } from "../types/project.types";

export async function listProjects() {
  // Retrieve project list from repository layer
  return [];
}

export async function findProjectById(id: string) {
  // Retrieve a single project by id
  return null;
}

export async function createProject(data: ProjectCreateRequest) {
  // Create a new project via repository
  return null;
}

export async function updateProject(id: string, data: ProjectUpdateRequest) {
  // Update existing project via repository
  return null;
}

export async function removeProject(id: string) {
  // Remove project record via repository
  return null;
}

export async function reorderProjectList(order: string[]) {
  // Reorder project display sequence
  return null;
}
