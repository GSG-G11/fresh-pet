const { getAllProducts, createProduct } = require('./productsController');
const { handleErrorNotFound, handleErrorServer } = require('./errorController');

module.exports = {
  getAllProducts,
  createProduct,
  handleErrorNotFound,
  handleErrorServer,
};
