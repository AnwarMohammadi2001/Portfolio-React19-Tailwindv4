import express from "express";
import multer from "multer";
import path from "path";
import Marquee from "../models/Marquee.js";

const router = express.Router();

// Setup storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // store files inside /uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  },
});

const upload = multer({ storage });

// 📌 Add new marquee image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { group } = req.body;
    const newImage = await Marquee.create({
      group,
      image: `/uploads/${req.file.filename}`, // save file path
    });
    res.status(201).json(newImage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to upload image" });
  }
});

// 📌 Get all
router.get("/", async (req, res) => {
  try {
    const images = await Marquee.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch images" });
  }
});

// 📌 Delete
router.delete("/:id", async (req, res) => {
  try {
    await Marquee.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete image" });
  }
});

export default router;
