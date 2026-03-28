import Cart from "../../models/cart.model.js";

const updateCart = async (req, res) => {
try {
      const { productId, size, quantity } = req.body;
      const userId = req.user?._id || req.user;
    
      if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
      }

      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
    
      const item = cart.items.find(
        (item) => item.productId && item.productId.toString() === String(productId) && item.size === size
      );
      if (!item) {
        return res.status(404).json({ message: "Product is not found in cart" });
      }
    
      if (quantity <= 0) {
        cart.items = cart.items.filter(
          (i) => !(i.productId.toString() === String(productId) && i.size === size)
        );
      } else {
        item.quantity = quantity;
        item.subtotal = item.price * quantity;
      }
    
      cart.totalPrice = cart.items.reduce((acc, item) => acc + item.subtotal, 0);
    
      await cart.save();
      return res.status(200).json({success: true, message: "Cart updated successfully", cart});
} catch (error) {
    console.error("Error updating cart:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
}
};

export default updateCart;
