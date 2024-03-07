import express from "express";
import User from "../models/User.js";

const router = express.Router();

// CREATE a NEW user
router.post("/", async (req, res) => {
  try {
    // create and save the new user, report sucess
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;