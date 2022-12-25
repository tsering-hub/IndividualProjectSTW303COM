const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  addChefAccount,
} = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addchefaccount", auth.adminGuard, addChefAccount);
router.get("/me", auth.adminGuard, getMe);

module.exports = router;
