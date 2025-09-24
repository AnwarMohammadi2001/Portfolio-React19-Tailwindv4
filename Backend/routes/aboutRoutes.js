import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/authMiddleware.js"; // ✅ Correct import
import { getAbout, addOrUpdateAbout } from "../controllers/aboutController.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Public GET
router.get("/", getAbout);

// Protected ADD/UPDATE
router.post(
  "/",
  verifyToken, // ✅ Use the correct middleware
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  addOrUpdateAbout
);

export default router;
