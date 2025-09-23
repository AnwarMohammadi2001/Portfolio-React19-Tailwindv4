const Project = require("../models/Project");

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Add a new project
exports.addProject = async (req, res) => {
  try {
    const { image, name, brief, link, tech } = req.body;

    if (!name || !brief) {
      return res.status(400).json({ message: "Name and brief are required" });
    }

    const project = new Project({ image, name, brief, link, tech });
    await project.save();

    res.status(201).json({ message: "Project created", project });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Project updated", project: updated });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
