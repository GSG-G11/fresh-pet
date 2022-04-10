// const getAllProducts = 'SELECT * FROM products';
const getAllProductsQuery = 'SELECT * FROM products';
const deleteProductQuery = 'DELETE FROM products WHERE id = ($1) RETURNING *';
const createProductQuery = `INSERT INTO products
(name, description, pet_category, sub_category,price,image)
VALUES
($1, $2, $3, $4, $5,$6) RETURNING *;`;

module.exports = {
  getAllProductsQuery,
  createProductQuery,
  // getAllProducts,
  deleteProductQuery,
};
