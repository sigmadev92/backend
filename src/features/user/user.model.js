import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      unique: [true, "This userName is not available"],
      sparse: true,
      match: /^[a-z][a-z0-9_-]{0,29}$/,
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
