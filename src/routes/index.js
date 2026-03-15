import { Router } from "express";
import apiRouter from "./api.js";
import invalidRoute from "../middlewares/invalidRoute.js";
import { errorHandler } from "../middlewares/errorHandler.js";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log("we");
  res.send("<h1>Backend</h1>");
});
indexRouter.use("/api", apiRouter);

indexRouter.use(invalidRoute);

indexRouter.use(errorHandler);

export default indexRouter;
