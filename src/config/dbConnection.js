import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

async function connectToDbMongoose() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to Database using Mongoose");
  } catch (error) {
    console.log(error);
  }
}

export default connectToDbMongoose;
