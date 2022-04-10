const router = require('express').Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
} = require('../controllers');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/product/:id', getSingleProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;
