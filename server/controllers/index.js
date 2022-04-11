const { handleErrorNotFound, handleErrorServer } = require('./errorController');
const { getSingleProduct } = require('./getSingleProduct');
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('./productsController');

const { renderClientPages } = require('./clientController');

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  handleErrorNotFound,
  handleErrorServer,
  renderClientPages
};
