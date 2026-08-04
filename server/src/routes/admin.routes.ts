import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

// Admin routes placeholder for protected CRUD operations

export default router;
