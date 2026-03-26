import mongoose from "mongoose";



export const itemSchema=new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId, ref:"Product", required:true},
})

const cartSchema= new mongoose.Schema({
userId:{
type:mongoose.Schema.Types.ObjectId, ref:"User", required:true,
required:true
},
items:[itemSchema],
totalPrice:{type:Number, required:true},
createdAt:{type:Date, default:Date.now},
updatedAt:{type:Date, default:Date.now}

})
itemSchema.index({ productId: 1 });
cartSchema.index({ userId: 1 });
const Cart = mongoose.model("Cart",cartSchema);

export default Cart;