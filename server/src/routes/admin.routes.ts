import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import adminProjectsRoutes from "./admin/projects.routes";

const router = Router();

router.use(authMiddleware);

// Admin routes
router.use("/projects", adminProjectsRoutes);

export default router;
