const express = require('express');
const { getHealthStatus } = require('../controllers/healthController');
const { getAllProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Health Check Endpoint
router.get('/health', getHealthStatus);

// Product Endpoints
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

module.exports = router;
