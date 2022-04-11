import React from 'react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const addToCartStorage = props => {
  const products = JSON.parse(localStorage.getItem('products'));
  products.push(props.product);
  localStorage.setItem('products', JSON.stringify(products));
};
const AddToCard = props => {
  const {product} = props;
  return (
    <button className="add-to-cart" onClick={() => addToCartStorage(product)}>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
};

export default AddToCard;
