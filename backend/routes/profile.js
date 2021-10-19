import express from "express";
import { registerUser, loginUser, getUserData } from "../controllers/user.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();

router.get("/getUserData", verifyJwt, getUserData);
// http://localhost:5000/



export default router;