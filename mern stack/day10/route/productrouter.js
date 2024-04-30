const express = require('express');
const productcontroller = require('../controllers/productscontroller.js');

const productrouter = express.Router();

productrouter('/')
.get(productcontroller.getAllproducts)
.post(productcontroller.addproducts);

productrouter.route('/:id')
.put(productcontroller.replaceproducts)
.delete(productcontroller.deleteproducts)

module.exports = productrouter;