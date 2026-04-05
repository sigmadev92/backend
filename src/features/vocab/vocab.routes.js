import { Router } from "express";
import { addNewWord, editWord } from "./vocab.controller.js";
const router = Router();

router.post("/add", addNewWord);

router.put("/:wordId", editWord);

export default router;
