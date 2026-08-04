import { Router } from "express";
import { login, logout, me, refresh } from "../controllers/auth.controller";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/me", me);
router.post("/refresh", refresh);

export default router;
