const { Router } = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/products', async (req, res) => {
    const Products = await Product.find();
    res.json(Products);
});

router.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const productSaved = await newProduct.save();
    res.json(productSaved);
});

module.exports = router;