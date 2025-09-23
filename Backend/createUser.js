import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const createUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const username = "admin";
    const password = "openUser123";

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ username, password: hashedPassword });
    await user.save();

    console.log("User created:", username);

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

createUser();
