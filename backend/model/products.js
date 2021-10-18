import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    Owner: String,
    imageUrl: Array,
    category: String,
    date: Date,
});

const Product = mongoose.model('Product', productSchema);
export default Product;