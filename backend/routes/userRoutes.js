const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  addChefAccount,
  getChefs,
  getMyselfCustomer,
} = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addchefaccount", auth.adminGuard, addChefAccount);
router.get("/me", auth.adminGuard, getMe);
router.get("/getchefs", auth.adminGuard, getChefs);
router.get("/myselfcustomer", auth.userGuard, getMyselfCustomer);
module.exports = router;
