const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

// Public route: get all projects
router.get("/", projectController.getProjects);

// Protected routes: add, update, delete projects (admin only)
router.post("/", verifyToken, verifyAdmin, projectController.addProject);
router.put("/:id", verifyToken, verifyAdmin, projectController.updateProject);
router.delete(
  "/:id",
  verifyToken,
  verifyAdmin,
  projectController.deleteProject
);

module.exports = router;
