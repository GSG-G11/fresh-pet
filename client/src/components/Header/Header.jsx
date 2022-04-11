import React from 'react';
import {ImCart} from 'react-icons/im';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="../img/logo.png" alt="" className="logo-img" />
      <div className="signin-cart-holder">
        <button className="signin-btn">Sign in</button>
        <div className="icons">
          <ImCart className="cart-icon" />
          <span className="product-num">5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
