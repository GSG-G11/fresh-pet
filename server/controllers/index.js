const {  getAllProducts,
  createProduct,
  deleteProduct,
} = require('./productsController');
const { handleErrorNotFound, handleErrorServer } = require('./errorController');
const { getSingleProduct } = require('./getSingleProduct');

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  handleErrorNotFound,
  handleErrorServer,
  deleteProduct,
};
