import { Router } from "express";
import userRouter from "../features/user/user.routes.js";
import vocabRouter from "../features/vocab/vocab.routes.js";
const router = Router();

router.use("/users", userRouter);
router.use("/vocab", vocabRouter);

export default router;
