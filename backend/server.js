const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// routes
app.use("/users", require("./routes/userRoutes"));
app.use("/fooditems", require("./routes/fooditemsRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
