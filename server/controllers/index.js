const { handleErrorNotFound, handleErrorServer } = require('./errorController');

const {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} = require('./productsController');

const { getSingleProduct } = require('./getSingleProduct');

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  handleErrorNotFound,
  handleErrorServer,
};
