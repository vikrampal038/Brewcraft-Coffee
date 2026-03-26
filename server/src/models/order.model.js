import mongoose from "mongoose";
import { itemSchema } from "./cart.model";

const orderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    items:[itemSchema],
    totalPrice:{type:Number, required:true},
    status:{type:String, enum:["pending", "preparing", "ready", "completed", "cancelled"], default:"pending"},
    orderType:{type:String, enum:["dine-in", "pickup"], required:true,default:"pickup"},
    paymentStatus:{type:String, enum:["pending", "paid", "failed"], default:"pending"},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})


orderSchema.index({ userId: 1});
const Order = mongoose.model("Order", orderSchema);

export default Order;