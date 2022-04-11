const getAllProductsQuery = 'SELECT * FROM products;';
const deleteProductQuery = 'DELETE FROM products WHERE id = ($1) RETURNING *;';
const updateProductQuery = `UPDATE
                                products 
                            SET 
                                name = $1, 
                                description = $2, 
                                pet_category = $3, 
                                sub_category = $4,
                                price = $5, 
                                image = $6 
                            WHERE 
                                id = $7 
                            RETURNING *;`;

const createProductQuery = `INSERT INTO products
(name, description, pet_category, sub_category,price,image)
VALUES
($1, $2, $3, $4, $5,$6) RETURNING *;`;

module.exports = {
  getAllProductsQuery,
  createProductQuery,
  deleteProductQuery,
  updateProductQuery,
};
