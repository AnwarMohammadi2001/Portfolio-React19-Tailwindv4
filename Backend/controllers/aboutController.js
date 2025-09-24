import About from "../models/About.js";
import fs from "fs";
import path from "path";

// GET about info
export const getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD or UPDATE about info
export const addOrUpdateAbout = async (req, res) => {
  try {
    let about = await About.findOne();

    const updateData = {
      name: req.body.name,
      story: req.body.story,
      experienceYears: req.body.experienceYears,
    };

    if (req.files?.resume)
      updateData.resume = "/uploads/" + req.files.resume[0].filename;
    if (req.files?.image1)
      updateData.image1 = "/uploads/" + req.files.image1[0].filename;
    if (req.files?.image2)
      updateData.image2 = "/uploads/" + req.files.image2[0].filename;

    if (about) {
      about = await About.findByIdAndUpdate(about._id, updateData, {
        new: true,
      });
      return res.json({ message: "About info updated successfully", about });
    }

    about = new About(updateData);
    await about.save();
    res.json({ message: "About info added successfully", about });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
