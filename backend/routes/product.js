import express from "express";
import { addToCart, viewCart, getProductDetails, getProductData, getRequestDetails, getRequestProduct, makeRequest } from "../controllers/product.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();

// http://localhost:5000/products/

router.get("/", (req,res) => {
    res.send('This works');
});

router.get("/viewCart", verifyJwt, viewCart);
router.post("/addToCart", verifyJwt, addToCart);
router.get("/getProducts", getProductDetails);
router.get("/getProductData", verifyJwt, getProductData);
router.get("/getRequests", verifyJwt, getRequestDetails);
router.get("/getRequestProduct", verifyJwt, getRequestProduct);
router.post("/makeRequest", verifyJwt, makeRequest);







export default router;