const express = require("express");
const router = express.Router();
const {
  addFooditems,
  GetFooditemsByAdmin,
} = require("../controllers/fooditemsController");
const auth = require("../middleware/authMiddleware");
const uploadFile = require("../file/uploadFile");

router.post(
  "/add",
  auth.adminGuard,
  uploadFile.single("food_img"),
  addFooditems
);

router.get("/getbyadmin", auth.adminGuard, GetFooditemsByAdmin);

module.exports = router;
