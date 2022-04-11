import React from 'react';
import { Link } from 'react-router-dom';
import AddToCard from '../Buttons/AddToCard';
import Delete from '../Buttons/Delete';
import Edit from '../Buttons/Edit';

// const deleteRequest = (id) => {
//   /// check it, it has error in console log
//   fetch(`/api/v1/products/product/${id}`, { method: 'DELETE' })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// Add to cart local storage function
// const addToCartStorage = (props) => {
//   const products = JSON.parse(localStorage.getItem('products'));
//   products.push(props.product);
//   localStorage.setItem('products', JSON.stringify(products));
// };

const Product = (props) => {
  const { id, name, price, image, description, pet_category, sub_category } =
    props.product;
  const productsLocalStorage = localStorage.getItem('products');
  if (!productsLocalStorage) {
    localStorage.setItem('products', JSON.stringify([]));
  }

  return (
    <div className='card'>
      <Delete {...props}/>
      <h1 className='title'>{name}</h1>
      <p className='description'>{description}</p>
      <div className='product-image'>
        <Link to={`/product/${id}`}>
          <img src={image} alt='product' />
        </Link>
      </div>
      <p className='price'>{price}$</p>
      <p className='sub-category'>{sub_category}</p>
      <p className={`forPet ${pet_category}`}>{pet_category}</p>
      <AddToCard {...props}/>
      <Edit/>
    </div>
  );
};

export default Product;
