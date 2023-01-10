const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc creating New order
// @route /order/add
// @access Private Customer
const addorder = asyncHandler(async (req, res) => {
  // Create order
  const order = await Order.create({
    orderItems: req.body.orderItems.map((x) => ({ ...x })),
    totalprice: req.body.totalprice,
    totalpreparingtime: req.body.totalpreparingtime,
    orderstatus: "Pending",
    paymentmethod: req.body.paymentmethod,
    paymentstatus: req.body.paymentstatus,
    tablenumber: req.body.tablenumber,
    userId: req.userInfo._id,
  });

  if (order) {
    res.status(201).json({
      msg: "Order successfully",
    });
  } else {
    res.status(400);
    throw new Error("Failed to order");
  }
});

// @desc Get all Orders items
// @route /order/getall
// @access Private admin
const getallOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .sort({
      createdAt: "desc",
    })
    .populate({
      path: "orderItems",
      populate: {
        path: "foodId",
      },
    });
  if (orders) {
    res.status(200).json({
      success: true,
      data: orders,
    });
  } else {
    res.status(400);
    throw new Error("Order not Found");
  }
});

// @desc Get all Orders of customer
// @route /order/getmyorders
// @access Private Customer
const getmyorders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.userInfo._id })
    .sort({
      createdAt: "desc",
    })
    .populate({
      path: "orderItems",
      populate: {
        path: "foodId",
      },
    });
  if (orders) {
    res.status(200).json({
      success: true,
      data: orders,
    });
  } else {
    res.status(400);
    throw new Error("Order not Found");
  }
});

// @desc Get all Orders of customer
// @route /order/getmypendingorders
// @access Private Customer
const getmypendingorders = asyncHandler(async (req, res) => {
  const orders = await Order.find({
    $and: [{ orderstatus: "Pending" }, { userId: req.userInfo._id }],
  })
    .sort({
      createdAt: "desc",
    })
    .populate({
      path: "orderItems",
      populate: {
        path: "foodId",
      },
    });
  if (orders) {
    res.status(200).json({
      success: true,
      data: orders,
    });
  } else {
    res.status(400);
    throw new Error("Order not Found");
  }
});

module.exports = {
  addorder,
  getallOrder,
  getmyorders,
  getmypendingorders,
};
