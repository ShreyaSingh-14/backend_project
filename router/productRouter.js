// router/productRouter.js
const express = require('express');
const router = express.Router();
const myProduct = require('../controller/MyProduct');

// Route example: GET /product/123
router.get('/:id', myProduct);

module.exports = router;
