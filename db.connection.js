import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()

const dbConnection = async () => {
  const url = "mongodb://0.0.0.0:27017/registrations";
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export default dbConnection;
