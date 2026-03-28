import mongoose from "mongoose";



export const itemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  name: { type: String, required: true }, 
  size: { type: String }, // To store variant size
  price: { type: Number, required: true }, 
  quantity: {
    type: Number,
    default: 1
  },
  subtotal: { type: Number, required: true }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true 
  },

  items: [itemSchema],

  totalPrice: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

cartSchema.index({ "items.productId": 1 });
cartSchema.index({ userId: 1 });
const Cart = mongoose.model("Cart",cartSchema);

export default Cart;