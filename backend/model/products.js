import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    owner: String,
    imageUrl: Array,
    category: String,
    // date: {
    //     type: new Date()
    // },
});

const Product = mongoose.model('Product', productSchema);
export default Product;