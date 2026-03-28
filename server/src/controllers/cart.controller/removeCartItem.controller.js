import Cart from "../../models/cart.model.js";

const removeCartItem = async (req, res) => {
  try {
    const { productId, size } = req.body;
    const userId = req.user?._id || req.user;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const item = cart.items.find(
      (item) => item.productId && item.productId.toString() === String(productId) && item.size === size
    );
    if (!item) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    cart.items = cart.items.filter(
      (item) => !(item.productId && item.productId.toString() === String(productId) && item.size === size)
    );
    cart.totalPrice = cart.items.reduce((acc, item) => acc + item.subtotal, 0);

    await cart.save();
    return res
      .status(200)
      .json({ success: true, message: "Item removed from cart", cart });
  } catch (error) {
    console.error("Error removing item:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default removeCartItem;
