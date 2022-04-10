const getAllProductsQuery = 'SELECT * FROM products';
const createProductQuery = `INSERT INTO products
(name, description, pet_category, sub_category,price,image)
VALUES
($1, $2, $3, $4, $5,$6) RETURNING *;`;

module.exports = {
  getAllProductsQuery,
  createProductQuery,
};
