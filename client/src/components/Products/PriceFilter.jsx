import React from 'react';
import './petFilterStyle.css';
const PriceFilter = ({priceRange, handlePriceRange}) => {

  return (
    <>
      <div class="wrapper">
      <fieldset class="filter-price">
        <div class="price-field">
          <input type="range"  min="0" max="200" onChange={(e) => handlePriceRange(+e.target.value, priceRange[1])} value={priceRange[0]} id="lower"/>
          <input type="range" min="0" max="200" onChange={(e) => handlePriceRange(priceRange[0], +e.target.value)} value={priceRange[1]} id="upper"/>
        </div>
        <div class="price-wrap">
          <div class="price-wrap-1">
            <input id="one" value={priceRange[0]}/>
            <span>$</span>
          </div>
          <div class="price-wrap-2">
            <input id="two" value={priceRange[1]}/>
            <span>$</span>
          </div>
        </div>
      </fieldset> 
    </div>
    </>
  )
}

export default PriceFilter;

