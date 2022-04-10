import React from 'react';

const ProductsFilter = () => {
  return (
    <div className="inputs-section">
      <input placeholder="Search for product" />
      <select>
        <option>All</option>
        <option>Food</option>
        <option>Accessories</option>
        <option>Toy</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
