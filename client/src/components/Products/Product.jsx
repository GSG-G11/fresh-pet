import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AddToCard, Delete } from '..';

const Product = (props) => {
  const { id, name, price, image, description, pet_category, sub_category } =
    props.product;
  const productsLocalStorage = localStorage.getItem('products');
  if (!productsLocalStorage) {
    localStorage.setItem('products', JSON.stringify([]));
  }

  return (
    <div className='card'>
      <Delete {...props} />
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
      <AddToCard {...props} />

      <button
        className='edit-btn'
        onClick={() =>
          props.openEditModalHandler('UpdateProduct', props.product)
        }>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
};

export default Product;
