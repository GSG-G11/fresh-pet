const router = require('express').Router()
const { getAllProducts, deleteProduct } = require('../controllers')
router.get('/', getAllProducts)
router.delete('/:id', deleteProduct)

module.exports = router
