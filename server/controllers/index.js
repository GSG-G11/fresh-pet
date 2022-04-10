const { getSingleProduct } = require('./getSingleProduct');
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('./productsController');
const { handleErrorNotFound, handleErrorServer } = require('./errorController');
const { getSingleProduct } = require('./getSingleProduct');

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  handleErrorNotFound,
  handleErrorServer,
  deleteProduct,
};
