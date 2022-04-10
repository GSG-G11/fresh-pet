const connection = require('../database/config/connection')
const queries = require('../database/queries/queries')

const getAllProducts = async (req, res) => {
  const products = await connection.query(queries.getAllProducts)

  res.status(200).json({
    status: 'success',
    products: products.rows,
  })
}

const deleteProduct = async (req, res) => {
  const { id } = req.params
  await connection.query(queries.deleteProductQuery, [id])
  res.status(204)
}

module.exports = {
  getAllProducts,
  deleteProduct,
}
