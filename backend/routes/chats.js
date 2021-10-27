import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import { createChat, getChatList, addChats, getMessagesFromDB } from "../controllers/chat.js";
const router = express.Router();


// http://localhost:5000/chat
router.post("/createChat", verifyJwt, createChat);
router.post("/addChats",  addChats);
router.get("/getChatList", verifyJwt, getChatList);
router.get("/getMessagesFromDB", verifyJwt, getMessagesFromDB);


export default router;