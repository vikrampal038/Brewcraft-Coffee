import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createToken = (userId,res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const registerUser = async (req, res) => {
  const { email, password, name, phone } = req.body;

  try {
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        message: "name, email, password, and phone are required",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const phoneString = String(phone).trim();
    const phonePattern = /^[89]\d{9}$/;
    if (!phonePattern.test(phoneString)) {
      return res.status(400).json({
        message:
          "Phone number must be numeric, start with 9 or 8, and be exactly 10 digits",
      });
    }

    const isUserExist = await User.findOne({ $or: [{ email }, { phone: phoneString }] });

    if (isUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashPassword,
      name,
      phone: phoneString,
    });
    await newUser.save();

    createToken(newUser._id, res);
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "There was an error registering the user",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    createToken(user._id, res);
    return res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "There was an error logging in the user",
      error: error.message,
    });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "User logged out successfully" });
}
