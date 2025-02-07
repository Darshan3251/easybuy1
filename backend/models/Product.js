
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categories: [{ type: String }], // Array of categories
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: [{ type: String }],
  netWeight: { type: String, required: true } // Added net weight field
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
