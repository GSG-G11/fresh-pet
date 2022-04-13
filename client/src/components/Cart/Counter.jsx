import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Counter extends Component {
  state = {
    count: this.props.product.quantity ?? 1,
  };

  updateCount = () => {
    const { product } = this.props;
    const products = JSON.parse(localStorage.getItem('products'));

    const updatedProduct = products.map((p) =>
      p.id === product.id ? { ...p, quantity: this.state.count } : p,
    );

    localStorage.setItem('products', JSON.stringify(updatedProduct));

    let sum = 0;
    updatedProduct.forEach(({ price, quantity }) => {
      sum += price * quantity;
    });

    this.props.updateTotalPrice(sum);
    localStorage.setItem('totalPrice', sum);
  };

  increase = () => {
    this.setState(
      (prevState, { count }) => ({
        count: prevState.count + 1,
      }),
      () => this.updateCount(),
    );
  };

  decrease = () => {
    this.setState(
      (prevState, { count }) => ({
        count: prevState.count <= 1 ? 1 : prevState.count - 1,
      }),
      () => this.updateCount(),
    );
  };

  componentDidMount() {
    this.updateCount();
  }

  render() {
    const { product } = this.props;
    const { count } = this.state;
    return (
      <>
        <li className='cart-product-item'>
          <img className='product-cart-img' src={product.image} alt='product' />
          <h4>{product.name}</h4>
          <span className='price-number'>${product.price}</span>
          <div className='add-quality'>
            <button
              className='decrease quality-btn'
              count={count * product.price}
              onClick={this.decrease}>
              -
            </button>
            <span className='quality-number'>{count}</span>
            <button
              className='increase quality-btn'
              count={count * product.price}
              onClick={() => this.increase()}>
              +
            </button>
          </div>
          <span className='price-total'>
            ${(product.price * count).toFixed(2)}
          </span>

          <button
            className='delete-btn'
            onClick={() => {
              this.props.deleteCartProduct(product.id);
              this.updateCount();
            }}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      </>
    );
  }
}
export default Counter;
