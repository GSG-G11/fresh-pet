import React, { Component } from 'react';
import Counter from './Counter';
import './cartStyle.css';


class Cart extends Component{
  state = {
    totalPrice: 0,
  };

  updateTotalPrice = (price) => {
    this.setState({totalPrice:price});
  }

  // CheckOut = () => {
  //   this.setState({totalPrice:0});
  //   localStorage.setItem('products', JSON.stringify([]));
  // }

render() {
    const { totalPrice } = this.state;
    const products =
      this.props.cartProduct ?? JSON.parse(localStorage.getItem('products'));
    return (
      <>
        <div className='container'>
          <section className='products-cart-section'>
            <ul className='cart-products-list'>
              {products.length ? (
                products.map((product) => (
                  <Counter
                    key={product.id}
                    product={product}
                    totalPrice={totalPrice}
                    updateTotalPrice={this.updateTotalPrice}
                    {...this.props}
                  />
                ))
              ) : (
                <h1>No Products Found</h1>
              )}
            </ul>
            <div className='total-cost-holder'>
              <h3 className='total-cost'>
                Total Cost: <span>${totalPrice.toFixed(2)}</span>
              </h3>
            </div>
              {/* <button
                  className="delete-btn"
                  onClick={() => this.CheckOut()}>
                  Check out
                </button> */}
          </section>
        </div>
      </>
    );
  }
}
export default Cart;
