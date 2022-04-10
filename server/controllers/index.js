const {getAllProducts, deleteProduct, updateProduct} = require('./productsController');
const {getSingleProduct} = require('./getSingleProduct');

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
