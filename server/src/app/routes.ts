import { Router } from "express";
import authRoutes from "../routes/auth.routes";
import publicRoutes from "../routes/public.routes";
import adminRoutes from "../routes/admin.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/public", publicRoutes);
router.use("/admin", adminRoutes);

export default router;
