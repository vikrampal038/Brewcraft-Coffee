import Product from "../../models/product.model.js";

const updateProduct = async(req,res)=>{

    const {productId} = req.params;
    const {name,description,price,category, imageUrl, isAvailable} = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            name,
            description,
            price,
            category,
            imageUrl,
            isAvailable
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating product",
            error: error.message
        });
    }
}

export default updateProduct;