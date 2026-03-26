import Product from "../../models/product.model.js";

const deleteProduct = async(req,res)=>{
    const {productId} = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            product: deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting product",
            error: error.message
        });
    }
}

export default deleteProduct;