const express = require('express');
const getProducts = require('./getProducts.js');
const getProduct = require('./getProduct.js');

const app = express();

app.use(express.json());

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(3005, () => console.log('[PORT] Server running on 3005!'));