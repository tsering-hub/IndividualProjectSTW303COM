const asyncHandler = require("express-async-handler");
// @desc Register New User
// @route /users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  res.send("register Routes");
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
