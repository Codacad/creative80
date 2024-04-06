import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()

// export const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URI);
//     console.log("MongoDB connection successfully");
//   } catch (err) {
//     console.log(err.message);
//   }
// };

export const localDbConnection = async () => {
  const uri = "mongodb://0.0.0.0:27017/users"
  try {
    await mongoose.connect(process.env.LOCAL_DB_URI);
    console.log("MongoDB connection successfully");
  } catch (err) {
    console.log(err.message);
  }
}
