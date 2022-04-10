const connection = require('../database/config/connection');
const {
  getAllProductsQuery,
  createProductQuery,
} = require('../database/queries/queries');

const getAllProducts = async (req, res) => {
  const products = await connection.query(getAllProductsQuery);

  res.status(200).json({
    status: 'success',
    products: products.rows,
  });
};

const createProduct = async (
  {
    body: {
      name,
      description,
      petCategory,
      subCategory,
      price,
      image,
    },
  },
  res,
) => {
  const products = await connection.query(createProductQuery, [
    name,
    description,
    petCategory,
    subCategory,
    price,
    image,
  ]);

  res.status(200).json({
    status: 'success',
    products: products.rows[0],
  });
};

module.exports = {
  getAllProducts,
  createProduct,
};
