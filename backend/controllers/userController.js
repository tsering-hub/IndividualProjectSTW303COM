const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

// @desc Register New User
// @route /users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;

  // Validation
  if (!username || !name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // find if user already exists
  const userEmailExists = await User.findOne({
    email,
  });

  if (userEmailExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const usernameExists = await User.findOne({
    username,
  });

  if (usernameExists) {
    res.status(400);
    throw new Error("Username already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    username,
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new error("Invalid user data");
  }
});

// @desc Login User
// @route /users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("login Routes");
});

module.exports = {
  registerUser,
  loginUser,
};
