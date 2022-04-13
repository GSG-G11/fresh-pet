import React from 'react';
import './petFilterStyle.css';
const PriceFilter = ({ priceRange, handlePriceRange, products }) => {
  const max = Math.max.apply(
    Math,
    products.map(({ price }) => price),
  );
  return (
    <>
      <div className='wrapper'>
        <fieldset className='filter-price'>
          <div className='price-field'>
            <input
              type='range'
              min='0'
              max={max}
              onChange={(e) => handlePriceRange(+e.target.value, priceRange[1])}
              value={priceRange[0]}
              id='lower'
            />
            <input
              type='range'
              min='0'
              max={max}
              onChange={(e) => handlePriceRange(priceRange[0], +e.target.value)}
              value={priceRange[1]}
              id='upper'
            />
          </div>
          <div className='price-wrap'>
            <div className='price-wrap-1'>
              <span>$ {priceRange[0]}</span>
            </div>
            <div className='price-wrap-2'>
              <span>$ {priceRange[1]}</span>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default PriceFilter;
