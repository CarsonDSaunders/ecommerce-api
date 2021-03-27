const products = require('../products.json');

const getProducts = (req, res) => {
    const queries = req.query;
    let filtProducts = products;
    console.log(queries)
    if (queries.price) {
        filtProducts = filtProducts.filter((ele) => ele.price === parseFloat(queries.price))
    }
    if (queries.minPrice) {
        filtProducts = filtProducts.filter((ele) => ele.price >= parseFloat(queries.minPrice))
    }
    if (queries.maxPrice) {
        filtProducts = filtProducts.filter((ele) => ele.price <= parseFloat(queries.maxPrice))
    }
    if (queries.name) {
        filtProducts = filtProducts.filter((ele) => ele.product_name.toLowerCase().includes(queries.name.toLowerCase()))
    }
    res.status(200).send(filtProducts);
};

module.exports = getProducts;