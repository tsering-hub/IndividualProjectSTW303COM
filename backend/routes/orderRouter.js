const express = require("express");
const router = new express.Router();
const auth = require("../middleware/authMiddleware");
const {
  addorder,
  getallOrder,
  getmyorders,
} = require("../controllers/orderController");

router.post("/add", auth.userGuard, addorder);
router.get("/getall", auth.adminGuard, getallOrder);
router.get("/getmyorders", auth.userGuard, getmyorders);

module.exports = router;
