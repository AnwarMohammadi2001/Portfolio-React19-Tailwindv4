import express from "express";
import transporter from "../config/gmail.js";
import Message from "../models/Message.js";

const router = express.Router();

// 📩 Send a new message
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    // 1. Save message in MongoDB
    const newMessage = await Message.create({ name, email, message });

    // 2. Send email notification to yourself
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📬 New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
});

// 📋 Get all messages (Dashboard)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }); // newest first
    res.json(messages);
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

// 🗑️ Delete a message by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Message.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Message not found" });
    }

    res.json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting message:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete message" });
  }
});

// 🗑️ Delete all messages (optional)
router.delete("/", async (req, res) => {
  try {
    await Message.deleteMany({});
    res.json({ success: true, message: "All messages deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting all messages:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete messages" });
  }
});

export default router;
