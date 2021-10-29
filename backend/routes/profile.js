import express from "express";
import { getUserData, saveChanges } from "../controllers/user.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();

router.get("/getUserData", verifyJwt, getUserData);
router.post("/saveChanges", verifyJwt, saveChanges);
// http://localhost:5000/



export default router;