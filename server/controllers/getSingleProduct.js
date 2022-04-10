const {getSingleProductQuery} = require('../database/queries/getSingleProductQuery');

const getSingleProduct = (req, res) => {
  const {id} = req.params;
  getSingleProductQuery(id)
  .then((data) => res.status(201)
  .json({
    msg: 'Product Details',
    status: 201,
    data: data.rows[0],
  }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
}
module.exports = {getSingleProduct};