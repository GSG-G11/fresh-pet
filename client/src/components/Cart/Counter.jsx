import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Counter extends Component {
  state = {
    count: 1
  };
  increase = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };
  decrease =  () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count - 1
    }));
  };
  render() {
    const {product} = this.props;
    const {count} = this.state;
    return (
      <>
      <li className='cart-product-item' key={product.id}>
        <img className='product-cart-img' src={product.image} alt='product' />
        <h4>{product.name}</h4>
        <span className='price-number'>${product.price}</span>
        <div className='add-quality'>
          <button className='decrease quality-btn' count={count*product.price} onClick = {this.decrease}>-</button>
          <span className='quality-number'>{count}</span>
          <button className='increase quality-btn' count={count*product.price} onClick = {this.increase}>+</button>
        </div>
        <span className='price-total'>${(product.price * count).toFixed(2)}</span>
        <FontAwesomeIcon icon={faTrash} />
      </li>
      </>
    )
  }
}
export default Counter;
