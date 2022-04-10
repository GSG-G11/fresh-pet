const connection = require('../config/connection');

const getSingleProductQuery = (productId) => {
  const sql = {
    text: 'SELECT * FROM products WHERE id=$1;',
    values: [productId]
  }
  return connection.query(sql);
}
module.exports = {getSingleProductQuery};