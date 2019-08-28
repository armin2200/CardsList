const express = require('express');

const {
  data: { products }
} = require('../../db/dataSource');

const router = express.Router();

function paginate(array, pageSize, pageNumber) {
  --pageNumber; // because pages logically start with 1, but technically with 0
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

router.post('/products', async (req, res, next) => {
  try {
    const { size, page } = req.query;
    let selectedProducts;
    if (+size && +page) selectedProducts = await paginate(products, size, page);
    // using await when you are working on asynchronous code
    else selectedProducts = await products;

    setTimeout(
      () =>
        res
          .status(200)
          .json({ products: selectedProducts, lengthOfItems: products.length }),
      1500
    ); // fake delay
  } catch (e) {
    next(e);
  }
});

module.exports = router;
