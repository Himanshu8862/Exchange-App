import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    buyer: String,
    seller: String,
    items: Array,
    decision : {
        type : String,
        default : "Request",
    },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;