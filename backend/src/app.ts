import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import core configuration
dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "success", message: "Server is healthy." });
});

// TODO: Import and Mount Routes

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

export default app;
