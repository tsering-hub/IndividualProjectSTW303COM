const express = require("express");
const router = express.Router();
const { addFooditems } = require("../controllers/fooditemsController");
const auth = require("../middleware/authMiddleware");
const uploadFile = require("../file/uploadFile");

router.post(
  "/add",
  auth.adminGuard,
  uploadFile.single("food_img"),
  addFooditems
);

module.exports = router;
