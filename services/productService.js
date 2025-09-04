// Product business logic and service functions
const Product = require('../model/productModel');

async function createProduct(data) {
	const product = new Product(data);
	return product.save();
}

async function getAllProducts() {
	return Product.find();
}

async function getProductById(id) {
	return Product.findById(id);
}

async function updateProduct(id, data) {
	return Product.findByIdAndUpdate(id, data, { new: true });
}

async function deleteProduct(id) {
	return Product.findByIdAndDelete(id);
}

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
