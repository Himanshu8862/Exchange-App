import express from "express";
import { addToCart, viewCart, getProductDetails, getProductData } from "../controllers/product.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();

// http://localhost:5000/products/

router.get("/", (req,res) => {
    res.send('This works');
});

router.get("/viewCart", verifyJwt, viewCart);
router.post("/addToCart", verifyJwt, addToCart);
router.get("/getProducts", verifyJwt, getProductDetails);
router.get("/getProductData", verifyJwt, getProductData);






export default router;