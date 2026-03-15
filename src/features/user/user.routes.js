import { Router } from "express";
import {
  registerUser,
  loginUser,
  deleteUserAccount,
  logOut,
} from "./user.controller.js";
const router = Router();
router.get("/test", (req, res) => {
  res.send("<h2>User: Working</h2>");
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/", deleteUserAccount);
router.get("/logout", logOut);

export default router;
