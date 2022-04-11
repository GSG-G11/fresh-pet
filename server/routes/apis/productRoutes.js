const router = require('express').Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../../controllers');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/product/:id', getSingleProduct);
router.delete('/product/:id', deleteProduct);
router.patch('/product/:id', updateProduct);


module.exports = router;
