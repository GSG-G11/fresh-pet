const router = require('express').Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
} = require('../controllers');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/product/:id', getSingleProduct);

module.exports = router;
