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
        message: "Name, email, password, and phone are required",
      });
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const phoneString = String(phone).trim();

    if (trimmedName.length < 2) {
      return res.status(400).json({
        field: "name",
        message: "Name must be at least 2 characters",
      });
    }

    const namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(trimmedName)) {
      return res.status(400).json({
        field: "name",
        message: "Name can contain only letters and spaces",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      return res.status(400).json({
        field: "email",
        message: "Enter a valid email address",
      });
    }

    if (!/^\d+$/.test(phoneString)) {
      return res.status(400).json({
        field: "phone",
        message: "Phone number must contain only numbers",
      });
    }

    if (phoneString.length !== 10) {
      return res.status(400).json({
        field: "phone",
        message: "Phone number must be exactly 10 digits",
      });
    }

    if (String(password).length < 6) {
      return res.status(400).json({
        field: "password",
        message: "Password must be at least 6 characters",
      });
    }

    const isUserExist = await User.findOne({
      $or: [{ email: trimmedEmail }, { phone: phoneString }],
    });

    if (isUserExist) {
      if (isUserExist.email === trimmedEmail) {
        return res.status(400).json({
          field: "email",
          message: "This email is already registered",
        });
      }

      return res.status(400).json({
        field: "phone",
        message: "This phone number is already registered",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: trimmedEmail,
      password: hashPassword,
      name: trimmedName,
      phone: phoneString,
    });
    await newUser.save();

    createToken(newUser._id, res);
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        createdAt: newUser.createdAt,
      },
    });
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

    const trimmedEmail = String(email).trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      return res.status(400).json({
        field: "identifier",
        message: "Enter a valid email address",
      });
    }

    if (String(password).length < 6) {
      return res.status(400).json({
        field: "password",
        message: "Password must be at least 6 characters",
      });
    }

    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(404).json({
        field: "identifier",
        message: "No account found with this email",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        field: "password",
        message: "Invalid password",
      });
    }
    createToken(user._id, res);
    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        createdAt: user.createdAt,
      },
    });
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
