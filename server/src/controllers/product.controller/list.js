import Product from "../../models/product.model.js";

const getProduct = async (req, res) => {
  const {
    category,
    minPrice,
    maxPrice,
    search,
    page = 1,
    limit = 10,
  } = req.query;
;

const query = {};

if (category) query.category = category;
if (minPrice || maxPrice) {
  query.price = {};
  if (minPrice) query.price.$gte = Number(minPrice);
  if (maxPrice) query.price.$lte = Number(maxPrice);
}

query.isAvailable = true;
if (search) {
  query.$text = { $search: search };
}

const skip = (page - 1) * limit;
try {
  const products = await Product.find(query)
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });


    const total = await Product.countDocuments(query);

    return res.status(200).json({
        success: true,
        products,
        total,
        page: Number(page),
        totalPages: Math.ceil(total / limit)

    })
} catch (error) {
  return res.status(500).json({
    success: false,
    message: "Error fetching products",
    error: error.message
  });
}
}

export default getProduct;