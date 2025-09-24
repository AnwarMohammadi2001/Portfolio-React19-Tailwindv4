import Project from "../models/Project.js";

// GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD project
export const addProject = async (req, res) => {
  try {
    const { name, brief, link, tech } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    const project = new Project({
      name,
      brief,
      link,
      tech: tech ? tech.split(",") : [],
      image: imagePath,
    });

    await project.save();
    res.status(201).json({ message: "Project added", project });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE project
export const updateProject = async (req, res) => {
  try {
    const { name, brief, link, tech } = req.body;
    const updatedData = {
      name,
      brief,
      link,
      tech: tech ? tech.split(",") : [],
    };
    if (req.file) updatedData.image = `/uploads/${req.file.filename}`;

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.status(200).json({ message: "Project updated", project: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
