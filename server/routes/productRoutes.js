const router = require('express').Router();
const {getAllProducts, getSingleProduct} = require('../controllers');
router.get('/', getAllProducts);
router.get('/product/:id', getSingleProduct);

module.exports = router;
