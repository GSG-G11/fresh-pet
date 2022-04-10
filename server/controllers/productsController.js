const connection = require('../database/config/connection');
const {
  getAllProductsQuery,
  createProductQuery,
  deleteProductQuery,
  updateProductQuery,
} = require('../database/queries/queries');
const { productValidationSchema, CustomError } = require('../utils');

const getAllProducts = async (req, res) => {
  const products = await connection.query(getAllProductsQuery);

  res.status(200).json({
    status: 'success',
    products: products.rows,
  });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await connection.query(deleteProductQuery, [id]);
  res.status(204).json({ msg: 'deleted item successfully' });
};

<<<<<<< HEAD
// we must validate the data before we update the product
const updateProduct = (
  {
    params: { id },
    body: { name, description, petCategory, subCategory, price, image },
  },
  res,
  next,
) => {
  productValidationSchema
    .validateAsync(
      {
        name,
        description,
        petCategory,
        subCategory,
        price,
        image,
      },
      { abortEarly: false },
    )
    .then(() =>
      connection.query(updateProductQuery, [
        name,
        description,
        petCategory,
        subCategory,
        price,
        image,
        id,
      ]),
    )
    .then((product) => {
      res.status(200).json({
        status: 200,
        message: 'Product Update Successfully 😉',
        data: product.rows[0],
      });
    })
    .catch((error) => {
      // Handle Error
      if (error.name === 'ValidationError') {
        const messages = error.details.map((e) => e.message);
        next(CustomError('Validation Error', 400, messages));
      } else {
        next(error);
      }
    });
=======
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, pet_category, sub_category, price, image } =
    req.body;
  await connection.query(queries.updateProductQuery, [
    name,
    description,
    pet_category,
    sub_category,
    price,
    image,
    id,
  ]);
  res.status(200).json({ msg: 'item updatad successfully' });
>>>>>>> d77c09e6943f3aba6a5ec2fce8da094f4d79b80f
};

const createProduct = (
  { body: { name, description, petCategory, subCategory, price, image } },
  res,
  next,
) => {
  productValidationSchema
    .validateAsync(
      {
        name,
        description,
        petCategory,
        subCategory,
        price,
        image,
      },
      { abortEarly: false },
    )
    .then(() =>
      connection.query(createProductQuery, [
        name,
        description,
        petCategory,
        subCategory,
        price,
        image,
      ]),
    )
    .then((product) => {
      res.status(200).json({
        status: 200,
        message: 'Create Product Successfully 😉',
        data: product.rows[0],
      });
    })
    .catch((error) => {
      // Handle Error
      if (error.name === 'ValidationError') {
        const messages = error.details.map((e) => e.message);
        next(CustomError('Validation Error', 400, messages));
      } else {
        next(error);
      }
    });
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
