import React, {Component} from 'react';
import Product from './Product';
import ProductsFilter from './ProductsFilter';
import PetFilter from './PetFilter';
import './ProductSection.css';

class ProductsList extends Component {
  state = {
    products: [],
    filteredProducts: [],
  };

  componentDidMount() {
    fetch('/api/v1/products')
      .then(res => res.json())
      .then(data => this.setState({products: data.products}));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.state.products) {
      this.setState({filteredProducts: this.state.products});
    }

    if (prevState.filteredProducts !== this.state.filteredProducts) {
      this.setState({filteredProducts: this.state.filteredProducts});
    }
  }

  handleSearch = event => {
    const searchValue = event.target.value.toLowerCase();
    const {products} = this.state;
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchValue);
    });
    this.setState({filteredProducts});
  };

  handleSelect = event => {
    const selectValue = event.target.value.toLowerCase();
    if (selectValue === 'all') {
      this.setState({filteredProducts: this.state.products});
      return;
    }
    const {products} = this.state;
    const filteredProducts = products.filter(product => {
      return product.sub_category === selectValue;
    });
    this.setState({filteredProducts});
  };

  render() {
    const {filteredProducts} = this.state;
    const productsList = filteredProducts.map(product => (
      <Product key={product.id} product={product} />
    ));

    return (
      <div className="container">
        <PetFilter/>  
        <ProductsFilter handleSearch={this.handleSearch} handleSelect={this.handleSelect} />

        <section className="products-section">
          {this.state.filteredProducts.length === 0 && <h1>No Products Found</h1>}
          {productsList}
        </section>
      </div>
    );
  }
}

export default ProductsList;
