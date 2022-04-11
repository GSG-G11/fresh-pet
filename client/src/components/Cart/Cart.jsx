import React from 'react';
import { Product } from '../Products';

const Cart = (props) => {
  console.log(props);
  const products =
    props.cartProduct ?? JSON.parse(localStorage.getItem('products'));
  const cartProducts = products.map((product) => (
    <Product key={product.id} product={product} {...props} />
  ));

  let sum = 0;
  products.forEach((element) => {
    sum += +element.price;
  });
  return (
    <>
      <div className='container'>
        <h3>Total Price: ${sum.toFixed(2)}</h3>
        <section className='products-section'>
          {products.length === 0 && <h1>No Products Found</h1>}
          {cartProducts}
        </section>
      </div>
    </>
  );
};
export default Cart;
