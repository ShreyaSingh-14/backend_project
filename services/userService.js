// User business logic and service functions
const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

async function registerUser(username, password) {
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = new User({ username, password: hashedPassword });
	return user.save();
}

async function loginUser(username, password) {
	const user = await User.findOne({ username });
	if (!user) return null;
	const isMatch = await bcrypt.compare(password, user.password);
	return isMatch ? user : null;
}

module.exports = { registerUser, loginUser };
