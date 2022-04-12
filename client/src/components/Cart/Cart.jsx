import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//import { Delete } from '../Buttons';
import Counter from './Counter';
import './cartStyle.css';

class Cart extends Component{
  state={
    products: JSON.parse(localStorage.getItem('products'))
  }
  render() {
    const {products} = this.state;
    let sum = 0;
    products.forEach((element) => {
      sum += +element.price;
    });
    return(
      <>
      <div className='container'>
          <h3>Total Price: {sum.toFixed(2)}$</h3>
          <section className='products-cart-section'>
            <ul className='cart-products-list'>
            { products.length ? products.map((product) => (
              <Counter product={product}/>
            )) : <h1>No Products Found</h1>}
  
            </ul>
            <div className='total-cost-holder'>
              <h3 className='total-cost'>Total Cost: <span>${sum.toFixed(2)}</span></h3>
            </div>
          </section>
      </div>
      </>
    )
    
  }
}
export default Cart;