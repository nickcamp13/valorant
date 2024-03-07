import express from "express";
import connectDB from "./db.js";
import userRoutes from './routes/users.js';

// environment variables
import dotenv from 'dotenv';
dotenv.config()

// App setup
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

// Start the app
app.listen(PORT, () => {
  console.log(`💻 Server is running on port ${PORT}`);
});

app.use('/api/users', userRoutes);