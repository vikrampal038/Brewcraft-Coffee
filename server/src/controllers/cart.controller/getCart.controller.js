import Cart from "../../models/cart.model.js";

const getCart = async (req, res) => {
  const userId = req.user?._id || req.user;
  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId", "name price imageUrl");
    if(!cart){
        return res.status(404).json({message:"Cart not found"});
    }
    return res.status(200).json({success: true, message:"Cart retrieved successfully", cart});
} catch (error) {
    console.error("Error retrieving cart:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
}

}

export default getCart;