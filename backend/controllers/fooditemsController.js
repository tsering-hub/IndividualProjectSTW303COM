const asyncHandler = require("express-async-handler");
const Fooditems = require("../models/fooditemsModel");

// @desc Adding New Food Item
// @route /fooditems
// @access Private Admin
const addFooditems = asyncHandler(async (req, res) => {
  // Validation file formate
  if (req.file == undefined) {
    res.status(400);
    throw new Error("Invalid file formate");
  }

  const { name, desc, category, preparingtime, price, stock } = req.body;

  // Validation
  if (!name || !desc || !category || !preparingtime || !price || !stock) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // find if food item already exists
  const foodExists = await Fooditems.findOne({
    name,
  });

  if (foodExists) {
    res.status(400);
    throw new Error("Food Item already exists");
  }

  // Create Food Item
  const food = await Fooditems.create({
    food_pic: req.file.filename,
    name: name,
    desc: desc,
    category: category,
    preparingtime: preparingtime,
    price: price,
    stock: stock,
    user: req.adminInfo._id,
  });

  if (food) {
    res.status(201).json({
      msg: "Food added successfully",
    });
  } else {
    res.status(400);
    throw new Error("Food not added");
  }
});

module.exports = {
  addFooditems,
};
