const router = require('express').Router();
const {getAllProducts} = require('../controllers');
router.get('/', getAllProducts);

module.exports = router;
