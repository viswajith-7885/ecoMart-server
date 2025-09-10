
import Product from "../models/products.js";

//create product
export const create = async (req, res) => {
 try {
    const { name, price, description, image } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const product = new Product({
      name,
      price,
      description,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//getProduct by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({message:"server error",error:error.message})
  }
};
