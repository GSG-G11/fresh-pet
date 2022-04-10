const connection = require('../database/config/connection');
const queries = require('../database/queries/queries');

const getAllProducts = async (req, res) => {
  const products = await connection.query(queries.getAllProducts);

  res.status(200).json({
    status: 'success',
    products: products.rows,
  });
};

module.exports = {
  getAllProducts,
};
