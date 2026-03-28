import mongoose from "mongoose";
import { itemSchema } from "./cart.model.js";

const orderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    items:[itemSchema],
    totalPrice:{type:Number, required:true},
    status:{type:String, enum:["pending", "preparing", "ready", "completed", "cancelled"], default:"pending"},
    paymentStatus:{type:String, enum:["pending", "paid", "failed"], default:"pending"}
}, { timestamps: true })


orderSchema.index({ userId: 1});
const Order = mongoose.model("Order", orderSchema);

export default Order;