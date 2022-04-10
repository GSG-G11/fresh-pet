const router = require('express').Router();
const {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
} = require('../controllers');
router.get('/', getAllProducts);
router.get('/product/:id', getSingleProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;
