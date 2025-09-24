// models/Marquee.js
import mongoose from "mongoose";

const marqueeSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      enum: ["upper", "lower"], // only two groups
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Marquee", marqueeSchema);
