const { Router } = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/products', async (req, res) => {
    const { limit = 5, page = 1 } = req.query;
    const Products = await Product.paginate({}, {
        limit: parseInt(limit),
        page: parseInt(page),
    });
    res.json(Products);
});

router.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const productSaved = await newProduct.save();
    res.json(productSaved);
});

module.exports = router;