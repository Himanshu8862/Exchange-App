import express from "express";
import uploadItem from "../controllers/uploadItem.js";

const router = express.Router();

router.post("/", uploadItem);

export default router;