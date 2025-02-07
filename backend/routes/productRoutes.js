const express = require('express');
const Product = require('../models/Product');
const { upload } = require('../config/cloudinary');
const router = express.Router();

router.post('/products', upload.array('image', 5), async (req, res) => {
  try {
    const { name, description, categories, price, netWeight } = req.body;

    // Convert categories to an array if it is a string
    const categoriesArray = categories
      ? (typeof categories === 'string' ? categories.split(',').map(cat => cat.trim()) : categories)
      : [];

    // Extract image URLs from uploaded files
    const image = req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];

    // Log uploaded images for debugging
    console.log("Uploaded images:", image);

    // Create the product
    const product = new Product({ name, description, categories: categoriesArray, price, netWeight, image });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single product
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product by ID (including image update)
router.put('/products/:id', upload.array('image', 5), async (req, res) => {
  try {
    const { name, description, categories, price, netWeight, existingImages } = req.body;

    // Convert categories to an array if it is a string
    const categoriesArray = categories 
      ? (typeof categories === 'string' ? categories.split(',').map(cat => cat.trim()) : categories)
      : [];

    // Handle existing images and new uploads
    const newImages = req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];
    const parsedExistingImages = existingImages ? JSON.parse(existingImages) : [];

    const image = [...parsedExistingImages, ...newImages];

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, categories: categoriesArray, price, netWeight, image },
      { new: true }
    );

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
