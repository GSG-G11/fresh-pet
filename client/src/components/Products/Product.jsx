import React, {Component} from 'react';

export class Product extends Component {
  render() {
    return (
      <div className="card">
        <button className="delete-btn">x</button>
        <h1 className="title">Meow Mix</h1>
        <p className="description">Original Choice Dry Cat Food</p>
        <div className="product-image">
          <img
            src="https://img.chewy.com/is/catalog/99965_MAIN._AC_SS232_V1462999356_.jpg"
            alt="product"
          />
        </div>
        <p className="price">9.48$</p>
        <p className="forPet cats">Cats</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    );
  }
}

export default Product;
