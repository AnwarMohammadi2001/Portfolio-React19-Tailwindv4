// backend/routes/auth.js
import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register); // <-- now correctly imported
router.post("/login", login);

export default router;
