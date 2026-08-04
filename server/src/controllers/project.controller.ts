import { Request, Response, NextFunction } from "express";
import {
  listProjects as svcListProjects,
  findProjectByIdOrSlug as svcFindProjectByIdOrSlug,
  createProject as svcCreateProject,
  updateProject as svcUpdateProject,
  removeProject as svcRemoveProject,
  reorderProjectList as svcReorderProjectList,
} from "../services/project.service";

export async function getProjects(req: Request, res: Response, next: NextFunction) {
  try {
    const items = await svcListProjects();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function getProject(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id || req.params.slug;
    const item = await svcFindProjectByIdOrSlug(id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
}

export async function createProject(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await svcCreateProject(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function updateProject(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await svcUpdateProject(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteProject(req: Request, res: Response, next: NextFunction) {
  try {
    await svcRemoveProject(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
}

export async function reorderProjects(req: Request, res: Response, next: NextFunction) {
  try {
    const { order } = req.body;
    const result = await svcReorderProjectList(order);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
