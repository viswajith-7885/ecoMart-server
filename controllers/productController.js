import Product from "../models/products.js";

//create product
export const create = async (req, res) => {
  try {
    const { name, price, description, image ,usermail,category} = req.body;
   
    

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const product = new Product({
      name,
      price,
      description,
      image,
      usermail,
      category,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
    console.log(error.message);
     console.log(req.body);
    
  }
};

//getproduct

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({ message: "products not found" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
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
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//update product
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, image,category } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.category = category || product.category;

    const updateProduct = await product.save();
    res.json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: "server Error", error: error.message });
  }
};

//delete product
export const deleteProduct = async (req,res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    await product.deleteOne();
    res.json({ message: "product removed" });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};
