<<<<<<< HEAD
=======
const { getSingleProduct } = require('./getSingleProduct');
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('./productsController');
>>>>>>> d77c09e6943f3aba6a5ec2fce8da094f4d79b80f
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
<<<<<<< HEAD
=======
  deleteProduct,
>>>>>>> d77c09e6943f3aba6a5ec2fce8da094f4d79b80f
};
