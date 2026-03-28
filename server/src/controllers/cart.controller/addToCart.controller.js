import Cart from "../../models/cart.model.js";
import Product from "../../models/product.model.js";

const addToCart = async (req, res) => {
  try {
    const { productId, size, quantity = 1 } = req.body;
    const userId = req.user?._id || req.user;

    const product = await Product.findById(productId);
    if (!product || !product.isAvailable) {
      return res.status(404).json({ message: "Product not available" });
    }

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId,
        items: [],
        totalPrice: 0,
      });
    }

    // Checking if same product WITH same size exists
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId && item.size === size
    );
    
    // Determine the price based on variants if a size was provided
    let itemPrice = product.price;
    if (size && product.variants && product.variants.length > 0) {
      const variant = product.variants.find((v) => v.size === size);
      if (variant) {
        itemPrice = variant.price;
      }
    }

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
      cart.items[existingItemIndex].subtotal = cart.items[existingItemIndex].quantity * cart.items[existingItemIndex].price;
    } else {
      cart.items.push({
        productId: product._id,
        name: product.name,
        size,
        quantity,
        price: itemPrice,
        subtotal: itemPrice * quantity,
      });
    }

    cart.totalPrice = cart.items.reduce((acc, item) => acc + item.subtotal, 0);
    await cart.save();
    return res.status(201).json({
        success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default addToCart;
