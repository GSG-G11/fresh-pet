import React from 'react';

const addToCartStorage = (props) => {
  const products = JSON.parse(localStorage.getItem('products'));
  products.push(props.product);
  localStorage.setItem('products', JSON.stringify(products));
};
const AddToCard = (props) => {
  const {product} = props;
  return (
    <button className='add-to-cart' onClick={() => addToCartStorage(product)}>
      Add to Cart
    </button>
  )
}

export default AddToCard;
