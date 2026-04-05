import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: "-1",
    },
    isMailVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["learner", "expert", "verifier", "admin"],
      default: "learner",
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("User", userSchema);

export default Users;
