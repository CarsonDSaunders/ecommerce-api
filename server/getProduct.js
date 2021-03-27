const products = require('../products.json');

const getProduct = (req, res) => {
    const product  = req.params;
    const item = products.find((ele) => ele.id === parseInt(product.id))
    if (!item) {
        res.status(500).send('Item not in list');   
    } else {
        res.status(200).send(item);
    }
};

module.exports = getProduct;