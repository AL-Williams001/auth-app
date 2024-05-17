import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser()); // Use cookie-parser

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middlewares

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// ROUTES

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
