import express from "express";
const router = express.Router();
import {
  addComment,
  viewDiscussion,
  addPost,
} from "../controllers/Discussion.js";


router.get("/view", viewDiscussion);
router.post("/addComment", addComment);
router.post("/addPost", addPost);

export default router;