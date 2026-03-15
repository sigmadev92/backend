import CustomError from "../../middlewares/errorHandler.js";
import { addUserRepo, getUserByMailRepo, removeUserRepo } from "./user.repo.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const registerUser = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, "11");
    await addUserRepo({ fullName, email, password: hashedPassword });
    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByMailRepo(email);
    if (!user) {
      return next(new CustomError(404, "Invalid Mail"));
    }
    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching) {
      return next(new CustomError(400, "Invalid Credentials"));
    }

    const token = jwt.sign({ _id: user._id, email });
    const cookieOptions = {
      httpOnly: true,
      sameSite: NODE_ENV === "production" ? "none" : "lax",
      secure: NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    };
    return res
      .status(200)
      .cookie("proj_eng", token, cookieOptions)
      .json({ success: true, user, token });
  } catch (error) {
    next(err);
  }
};

const logOut = (req, res, next) => {
  res
    .status(200)
    .cookie("proj_eng", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({ success: true, msg: "logout successful" });
};

const deleteUserAccount = async (req, res, next) => {
  const { _id } = req.USER;
  const result = await removeUserRepo(_id);
  if (!result) {
    return next(new CustomError(403, "Invalid User Id"));
  }
  res
    .status(200)
    .cookie("blog_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      msg: "Account and token deleted and loged out successfully",
    });
};

export { registerUser, loginUser, logOut, deleteUserAccount };
