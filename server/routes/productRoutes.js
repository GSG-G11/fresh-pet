const router = require('express').Router();
const { getAllProducts, createProduct } = require('../controllers');

router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;
