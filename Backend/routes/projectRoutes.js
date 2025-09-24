import express from "express";
import {
  addProject,
  updateProject,
  getProjects,
  deleteProject,
} from "../controllers/projectController.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Routes
router.get("/", getProjects); // list all projects
router.post("/", verifyToken, verifyAdmin, upload.single("image"), addProject);
router.put(
  "/:id",
  verifyToken,
  verifyAdmin,
  upload.single("image"),
  updateProject
);
router.delete("/:id", verifyToken, verifyAdmin, deleteProject);

export default router;
