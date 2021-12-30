const express = require('express');
const app  = express();

const productRoutes = require('./routes/products.routes');

require('./database');

app.use(express.json());

app.use(productRoutes);

app.listen(3000);