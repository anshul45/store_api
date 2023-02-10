import mongoose from "mongoose";
const connectDB = (url) => {
  return mongoose.set("strictQuery", true).connect(url);
};

export default connectDB;
