import Product from "../../models/product.model.js";

 const createProduct = async (req, res) => {
    const {
        name,
        description,
        price,
        category,
        imageUrl,
        isAvailable = true
    }= req.body;


    if(!name || !description || !price || !category || !imageUrl) {

return res.status(400).json({ message: "All fields are required" });
    }

    if(!Number.isFinite(price) || price <= 0) {
        return res.status(400).json({ message: "Price must be a positive number" });
    }

    try {
        const newProduct = new Product({
            name,
            category,
            description,
            price,
            imageUrl,
            isAvailable
        })

        const savedProduct = await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: savedProduct
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error creating product",
            error: error.message
        })
    }
}

export default createProduct;