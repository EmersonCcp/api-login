import { Router } from "express";
import {
  login,
  register,
  authenticateToken,
} from "../controllers/authentication.controller.js";

const router = Router();

router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/auth/authenticateToken", authenticateToken);

export default router;
