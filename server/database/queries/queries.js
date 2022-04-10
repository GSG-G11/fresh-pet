const getAllProducts = 'SELECT * FROM products';
const deleteProductQuery = 'DELETE FROM products WHERE id = ($1) RETURNING *';
const updateProductQuery = 'UPDATE products SET name=$1, description=$2,  pet_category=$3, sub_category =$4 ,price =$5 , image =$6 WHERE id = $7 RETURNING name'

module.exports = {
  getAllProducts,
  deleteProductQuery,
  updateProductQuery,
};
