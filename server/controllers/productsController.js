const connection = require('../database/config/connection');
const queries = require('../database/queries/queries');

const getAllProducts = async (req, res) => {
  const products = await connection.query(queries.getAllProducts);

  res.status(200).json({
    status: 'success',
    products: products.rows,
  });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params
  await connection.query(queries.deleteProductQuery, [id])
  res.status(204).json({msg:'deleted item successfully'})
}
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {name , description, pet_category,sub_category,price,image} = req.body 
  await connection.query(queries.updateProductQuery, [name, description, pet_category, sub_category, price, image, id])
  res.status(200).json({msg:'item updatad successfully'})
  
}

module.exports = {
  getAllProducts,
  deleteProduct,
  updateProduct,
};
