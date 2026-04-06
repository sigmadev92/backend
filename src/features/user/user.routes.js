import { Router } from "express";
import {
  registerUser,
  loginUser,
  deleteUserAccount,
  logOut,
  getAuth,
} from "./user.controller.js";
import validateRegData from "../../middlewares/validators/user/signup.js";
import validateLoginData from "../../middlewares/validators/user/login.js";
import { authMiddleware, protectExposed } from "../../middlewares/auth.js";
const router = Router();
router.get("/test", (req, res) => {
  res.send("<h2>User: Working</h2>");
});
router.post("/signup", protectExposed, validateRegData, registerUser);
router.post("/signin", protectExposed, validateLoginData, loginUser);
router.delete("/", authMiddleware, deleteUserAccount);
router.get("/auth", authMiddleware, getAuth);
router.get("/signout", logOut);

export default router;
