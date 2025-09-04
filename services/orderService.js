// Order business logic and service functions
const Order = require('../model/orderModel');

async function placeOrder(userId, products, total) {
	const order = new Order({ user: userId, products, total });
	return order.save();
}

async function getOrdersByUser(userId) {
	return Order.find({ user: userId }).populate('products.product');
}

module.exports = { placeOrder, getOrdersByUser };
