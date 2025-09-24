import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    story: { type: String, required: true },
    resume: { type: String }, // file path
    image1: { type: String },
    image2: { type: String },
    experienceYears: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const About = mongoose.model("About", AboutSchema);
export default About;
