import React from 'react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const addToCartStorage = ({
  product,
  alertSuccess,
  alertError,
  updateNumberCartProduct,
  updateCartProduct,
}) => {

  let products = JSON.parse(localStorage.getItem('products'));
  const firstProduct = products.find(({id}) => id === product.id);

  if (firstProduct) {
    alertError('Product already in cart');
  } else {
    product.quantity = 1;
    products = [...products, product];
    localStorage.setItem('products', JSON.stringify(products));
    alertSuccess('Product added to cart');
    updateNumberCartProduct();
    updateCartProduct();
  }
};
const AddToCard = props => {
  return (
    <button className="add-to-cart" onClick={() => addToCartStorage(props)}>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
};

export default AddToCard;
