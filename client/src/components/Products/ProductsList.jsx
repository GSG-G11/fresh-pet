import React, {Component} from 'react';
import Product from './Product';
import ProductsFilter from './ProductsFilter';
import './ProductSection.css';

class ProductsList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('/api/v1/products')
      .then(res => res.json())
      .then(data => this.setState({products: data.products}));
  }
  render() {
    const {products} = this.state;
    const productsList = products.map(product => (
      <Product key={product.id} product={product} />
    ));
    return (
      <div className="container">
        <ProductsFilter />
        <section className="products-section">
          {this.state.products.length === 0 && <h1>No Products Found</h1>}
          {productsList}
        </section>
      </div>
    );
  }
}

export default ProductsList;
