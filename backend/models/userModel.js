const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    profile_pic: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    userType: {
      type: String,
      required: true,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
