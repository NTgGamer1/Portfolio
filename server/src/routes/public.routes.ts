import { Router } from "express";
import { getProjects, getProject } from "../controllers/project.controller";

const router = Router();

router.get("/projects", getProjects);
router.get("/projects/:slug", getProject);

export default router;
