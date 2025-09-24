// models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    image: String,
    name: { type: String, required: true },
    brief: { type: String, required: true },
    link: String,
    tech: [String],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project; // ✅ default export for ESM
