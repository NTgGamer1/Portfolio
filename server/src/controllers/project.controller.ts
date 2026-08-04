import { Request, Response, NextFunction } from "express";

export async function getProjects(req: Request, res: Response, next: NextFunction) {
  // Fetch a list of projects for admin or public endpoints
  res.status(501).json({ message: "Not implemented" });
}

export async function getProject(req: Request, res: Response, next: NextFunction) {
  // Fetch a single project by id or slug
  res.status(501).json({ message: "Not implemented" });
}

export async function createProject(req: Request, res: Response, next: NextFunction) {
  // Create a new project record
  res.status(501).json({ message: "Not implemented" });
}

export async function updateProject(req: Request, res: Response, next: NextFunction) {
  // Update an existing project record
  res.status(501).json({ message: "Not implemented" });
}

export async function deleteProject(req: Request, res: Response, next: NextFunction) {
  // Delete a project record
  res.status(501).json({ message: "Not implemented" });
}

export async function reorderProjects(req: Request, res: Response, next: NextFunction) {
  // Reorder project display order
  res.status(501).json({ message: "Not implemented" });
}
