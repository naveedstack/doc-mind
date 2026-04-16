import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 8000;

// Initialize Server
const startServer = async () => {
  // Connect to Database
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  });
};

startServer();
