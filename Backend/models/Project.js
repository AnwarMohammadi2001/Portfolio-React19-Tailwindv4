const mongoose = require("mongoose");

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

module.exports = mongoose.model("Project", projectSchema);
