import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URL  ;
    await mongoose.connect(mongoURI);
    console.log("Connected successfully to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.log("Error connecting to database", error);
    throw error;
  }
};
export default connectDB;