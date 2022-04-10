const getAllProducts = 'SELECT * FROM products';
const deleteProductQuery = 'DELETE FROM products WHERE id = ($1) RETURNING *';

module.exports = {
  getAllProducts,
  deleteProductQuery,
};
