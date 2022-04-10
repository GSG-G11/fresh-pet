import React from 'react';
import Product from './Product';
import ProductsFilter from './ProductsFilter';
import './ProductSection.css';

const ProductsList = () => {
  return (
    <div className="container">
      <ProductsFilter />
      <section className="products-section">
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default ProductsList;
